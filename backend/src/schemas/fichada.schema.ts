import { z } from 'zod';

export const createFichadaSchema = z.object({
  body: z.object({
    empleadoId: z.number().int().positive('El ID del empleado es requerido'),
    timestamp: z.string().min(1, 'El timestamp es requerido'),
    tipo: z.enum(['entrada', 'salida'] as const, 'El tipo debe ser "entrada" o "salida"'),
    origen: z.enum(['biometrico', 'manual', 'qr', 'api', 'pin'] as const).default('manual'),
    usuarioRegistro: z.number().int().positive().optional(),
    motivo: z.string().max(500).optional(),
    esCorreccion: z.boolean().default(false),
    fichadaOriginalId: z.number().int().positive().optional(),
  }),
});

export const updateFichadaSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID debe ser un número'),
  }),
  body: z.object({
    motivo: z.string().max(500).optional(),
  }),
});
