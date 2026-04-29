import { z } from 'zod';

// Expresión regular para validar el formato de hora HH:mm o HH:mm:ss
const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;

export const createHorarioSchema = z.object({
  body: z.object({
    nombre: z.string().min(3, 'El nombre debe tener al menos 3 caracteres').max(100),
    tipo: z.string().min(1, 'El tipo es requerido').max(50),
    diasSemana: z.union([z.string(), z.array(z.string())]),
    horaEntrada: z.string().regex(timeRegex, 'El formato debe ser HH:mm'),
    horaSalida: z.string().regex(timeRegex, 'El formato debe ser HH:mm'),
    toleranciaEntrada: z.number().int().min(0, 'La tolerancia debe ser positiva'),
    toleranciaSalida: z.number().int().min(0, 'La tolerancia debe ser positiva'),
    descansoInicio: z.string().regex(timeRegex, 'El formato debe ser HH:mm').optional().nullable(),
    descansoFin: z.string().regex(timeRegex, 'El formato debe ser HH:mm').optional().nullable(),
    minutosMinDescanso: z.number().int().min(0),
    umbralHorasExtra: z.number().int().min(0),
  }).passthrough(),
});

export const updateHorarioSchema = z.object({
  body: z.object({
    nombre: z.string().min(3).max(100).optional(),
    tipo: z.string().min(1).max(50).optional(),
    diasSemana: z.union([z.string(), z.array(z.string())]).optional(),
    horaEntrada: z.string().regex(timeRegex).optional(),
    horaSalida: z.string().regex(timeRegex).optional(),
    toleranciaEntrada: z.number().int().min(0).optional(),
    toleranciaSalida: z.number().int().min(0).optional(),
    descansoInicio: z.string().regex(timeRegex).optional().nullable(),
    descansoFin: z.string().regex(timeRegex).optional().nullable(),
    minutosMinDescanso: z.number().int().min(0).optional(),
    umbralHorasExtra: z.number().int().min(0).optional(),
  }).passthrough(),
});
