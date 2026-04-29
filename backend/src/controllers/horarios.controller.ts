import { Request, Response } from 'express';
import { prisma } from '../db/prisma';

const parseTime = (timeStr?: string | null) => {
  if (!timeStr) return null;
  return new Date(`1970-01-01T${timeStr}:00Z`);
};

const formatTime = (date?: Date | null) => {
  if (!date) return null;
  return date.toISOString().substring(11, 16);
};

const mapToPrisma = (data: any) => {
  const mapped: any = {};
  if (data.nombre !== undefined) mapped.nombre = data.nombre;
  if (data.tipo !== undefined) mapped.tipo = data.tipo;
  if (data.diasSemana !== undefined) {
    mapped.diassemana = Array.isArray(data.diasSemana) ? data.diasSemana.join(',') : data.diasSemana;
  }
  if (data.horaEntrada !== undefined) mapped.horaentrada = parseTime(data.horaEntrada);
  if (data.horaSalida !== undefined) mapped.horasalida = parseTime(data.horaSalida);
  if (data.toleranciaEntrada !== undefined) mapped.toleranciaentrada = data.toleranciaEntrada;
  if (data.toleranciaSalida !== undefined) mapped.toleranciasalida = data.toleranciaSalida;
  if (data.descansoInicio !== undefined) mapped.descansoinicio = parseTime(data.descansoInicio);
  if (data.descansoFin !== undefined) mapped.descansofin = parseTime(data.descansoFin);
  if (data.minutosMinDescanso !== undefined) mapped.minutosmindescanso = data.minutosMinDescanso;
  if (data.umbralHorasExtra !== undefined) mapped.umbralhorasextra = data.umbralHorasExtra;
  return mapped;
};

export const mapFromPrismaHorario = (p: any) => {
  if (!p) return p;
  return {
    id: p.id,
    nombre: p.nombre,
    tipo: p.tipo,
    diasSemana: p.diassemana ? p.diassemana.split(',') : [],
    horaEntrada: formatTime(p.horaentrada),
    horaSalida: formatTime(p.horasalida),
    toleranciaEntrada: p.toleranciaentrada,
    toleranciaSalida: p.toleranciasalida,
    descansoInicio: formatTime(p.descansoinicio),
    descansoFin: formatTime(p.descansofin),
    minutosMinDescanso: p.minutosmindescanso,
    umbralHorasExtra: p.umbralhorasextra,
  };
};

export const getHorarios = async (req: Request, res: Response) => {
  try {
    const horarios = await prisma.horarios.findMany({
      orderBy: { nombre: 'asc' },
    });
    res.json(horarios.map(mapFromPrismaHorario));
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener horarios', error });
  }
};

export const getHorarioById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const horario = await prisma.horarios.findUnique({
      where: { id: Number(id) },
    });
    if (!horario) {
      return res.status(404).json({ message: 'Horario no encontrado' });
    }
    res.json(mapFromPrismaHorario(horario));
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener horario', error });
  }
};

export const createHorario = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const nuevoHorario = await prisma.horarios.create({
      data: mapToPrisma(data),
    });
    res.status(201).json(mapFromPrismaHorario(nuevoHorario));
  } catch (error) {
    res.status(500).json({ message: 'Error al crear horario', error });
  }
};

export const updateHorario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const horarioActualizado = await prisma.horarios.update({
      where: { id: Number(id) },
      data: mapToPrisma(data),
    });
    res.json(mapFromPrismaHorario(horarioActualizado));
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar horario', error });
  }
};

export const deleteHorario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const empleados = await prisma.empleados.findFirst({
      where: { horarioid: Number(id) }
    });
    if (empleados) {
      return res.status(400).json({ message: 'No se puede eliminar porque hay empleados asignados a este horario' });
    }

    await prisma.horarios.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar horario', error });
  }
};
