import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import { mapFromPrismaHorario } from './horarios.controller';

const mapToPrismaEmpleado = (data: any) => {
  const mapped: any = {};
  if (data.legajo !== undefined) mapped.legajo = data.legajo;
  if (data.nombre !== undefined) mapped.nombre = data.nombre;
  if (data.apellido !== undefined) mapped.apellido = data.apellido;
  if (data.dni !== undefined) mapped.dni = data.dni;
  if (data.cuil !== undefined) mapped.cuil = data.cuil;
  if (data.fechaIngreso !== undefined) mapped.fechaingreso = new Date(data.fechaIngreso);
  if (data.categoriaLaboral !== undefined) mapped.categorialaboral = data.categoriaLaboral;
  if (data.convenio !== undefined) mapped.convenio = data.convenio;
  if (data.tipoJornada !== undefined) mapped.tipojornada = data.tipoJornada;
  if (data.horarioId !== undefined) mapped.horarioid = data.horarioId;
  if (data.diasDescanso !== undefined) {
    mapped.diasdescanso = Array.isArray(data.diasDescanso) ? data.diasDescanso.join(',') : data.diasDescanso;
  }
  if (data.modalidadFichada !== undefined) mapped.modalidadfichada = data.modalidadFichada;
  if (data.estado !== undefined) mapped.estado = data.estado;
  return mapped;
};

const mapFromPrismaEmpleado = (p: any) => {
  if (!p) return p;
  return {
    id: p.id,
    legajo: p.legajo,
    nombre: p.nombre,
    apellido: p.apellido,
    dni: p.dni,
    cuil: p.cuil,
    fechaIngreso: p.fechaingreso,
    categoriaLaboral: p.categorialaboral,
    convenio: p.convenio,
    tipoJornada: p.tipojornada,
    horarioId: p.horarioid,
    diasDescanso: p.diasdescanso ? p.diasdescanso.split(',') : [],
    modalidadFichada: p.modalidadfichada,
    estado: p.estado,
    horarios: p.horarios ? mapFromPrismaHorario(p.horarios) : undefined
  };
};

export const getEmpleados = async (req: Request, res: Response) => {
  try {
    const empleados = await prisma.empleados.findMany({
      include: {
        horarios: true,
      },
      orderBy: { apellido: 'asc' },
    });
    res.json(empleados.map(mapFromPrismaEmpleado));
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener empleados', error });
  }
};

export const getEmpleadoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const empleado = await prisma.empleados.findUnique({
      where: { id: Number(id) },
      include: {
        horarios: true,
      },
    });
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.json(mapFromPrismaEmpleado(empleado));
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener empleado', error });
  }
};

export const createEmpleado = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const existe = await prisma.empleados.findFirst({
      where: {
        OR: [
          { legajo: data.legajo },
          { dni: data.dni },
          { cuil: data.cuil }
        ]
      }
    });

    if (existe) {
      return res.status(400).json({ message: 'Legajo, DNI o CUIL ya registrados en el sistema' });
    }

    const nuevoEmpleado = await prisma.empleados.create({
      data: mapToPrismaEmpleado(data),
      include: {
        horarios: true
      }
    });
    res.status(201).json(mapFromPrismaEmpleado(nuevoEmpleado));
  } catch (error) {
    res.status(500).json({ message: 'Error al crear empleado', error });
  }
};

export const updateEmpleado = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const empleadoActualizado = await prisma.empleados.update({
      where: { id: Number(id) },
      data: mapToPrismaEmpleado(data),
      include: {
        horarios: true
      }
    });
    res.json(mapFromPrismaEmpleado(empleadoActualizado));
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar empleado', error });
  }
};

export const deleteEmpleado = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const empleado = await prisma.empleados.findUnique({ where: { id: Number(id) } });
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    await prisma.empleados.delete({
      where: { id: Number(id) },
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar empleado. Posiblemente tenga registros dependientes', error });
  }
};
