import { z } from 'zod';

// Expresión regular para validar el formato de hora HH:mm o HH:mm:ss
const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;

export const createHorarioSchema = z.object({
  body: z.object({
    Nombre: z.string().min(3, 'El nombre debe tener al menos 3 caracteres').max(100),
    Tipo: z.string().min(1, 'El tipo es requerido').max(50),
    DiasSemana: z.string().min(1, 'Los días de la semana son requeridos'),
    HoraEntrada: z.string().regex(timeRegex, 'El formato debe ser HH:mm'),
    HoraSalida: z.string().regex(timeRegex, 'El formato debe ser HH:mm'),
    ToleranciaEntrada: z.number().int().min(0, 'La tolerancia debe ser positiva'),
    ToleranciaSalida: z.number().int().min(0, 'La tolerancia debe ser positiva'),
    DescansoInicio: z.string().regex(timeRegex, 'El formato debe ser HH:mm').optional().nullable(),
    DescansoFin: z.string().regex(timeRegex, 'El formato debe ser HH:mm').optional().nullable(),
    MinutosMinDescanso: z.number().int().min(0),
    UmbralHorasExtra: z.number().int().min(0),
  }),
});

export const updateHorarioSchema = z.object({
  body: z.object({
    Nombre: z.string().min(3).max(100).optional(),
    Tipo: z.string().min(1).max(50).optional(),
    DiasSemana: z.string().min(1).optional(),
    HoraEntrada: z.string().regex(timeRegex).optional(),
    HoraSalida: z.string().regex(timeRegex).optional(),
    ToleranciaEntrada: z.number().int().min(0).optional(),
    ToleranciaSalida: z.number().int().min(0).optional(),
    DescansoInicio: z.string().regex(timeRegex).optional().nullable(),
    DescansoFin: z.string().regex(timeRegex).optional().nullable(),
    MinutosMinDescanso: z.number().int().min(0).optional(),
    UmbralHorasExtra: z.number().int().min(0).optional(),
  }),
});
