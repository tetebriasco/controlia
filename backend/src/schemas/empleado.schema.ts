import { z } from 'zod';

export const createEmpleadoSchema = z.object({
  body: z.object({
    Legajo: z.string().min(1, 'El legajo es requerido').max(50),
    Nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
    Apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres').max(100),
    Dni: z.string().regex(/^\d{7,10}$/, 'El DNI debe contener solo números (7-10 dígitos)').max(20),
    Cuil: z.string().regex(/^\d{10,12}$/, 'El CUIL debe contener solo números (10-12 dígitos)').max(20),
    // Prisma acepta strings ISO para las fechas
    FechaIngreso: z.string().datetime({ message: 'La fecha de ingreso debe ser válida (ISO 8601)' }),
    CategoriaLaboral: z.string().min(1, 'La categoría es requerida').max(100),
    Convenio: z.string().max(100).optional().nullable(),
    TipoJornada: z.string().min(1, 'El tipo de jornada es requerido').max(50),
    HorarioId: z.number().int().positive('El HorarioId debe ser un ID válido'),
    DiasDescanso: z.string().min(1, 'Los días de descanso son requeridos').max(100),
    ModalidadFichada: z.string().min(1, 'La modalidad de fichada es requerida').max(50),
    Estado: z.string().min(1, 'El estado es requerido').max(50),
  }),
});

export const updateEmpleadoSchema = z.object({
  body: z.object({
    Legajo: z.string().min(1).max(50).optional(),
    Nombre: z.string().min(2).max(100).optional(),
    Apellido: z.string().min(2).max(100).optional(),
    Dni: z.string().regex(/^\d{7,10}$/).max(20).optional(),
    Cuil: z.string().regex(/^\d{10,12}$/).max(20).optional(),
    FechaIngreso: z.string().datetime().optional(),
    CategoriaLaboral: z.string().min(1).max(100).optional(),
    Convenio: z.string().max(100).optional().nullable(),
    TipoJornada: z.string().min(1).max(50).optional(),
    HorarioId: z.number().int().positive().optional(),
    DiasDescanso: z.string().min(1).max(100).optional(),
    ModalidadFichada: z.string().min(1).max(50).optional(),
    Estado: z.string().min(1).max(50).optional(),
  }),
});
