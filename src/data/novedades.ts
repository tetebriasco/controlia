import type { Novedad } from '../types';

export const novedades: Novedad[] = [
  // Automatic - Tardanzas
  {
    id: 1, empleadoId: 2, tipo: 'tardanza',
    fechas: ['2026-04-21'], cantidad: 15, unidad: 'minutos',
    estado: 'pendiente', origen: 'automatica',
    observacion: 'Llegó 15 min tarde al turno tarde',
    periodo: '2026-04',
  },
  {
    id: 2, empleadoId: 1, tipo: 'tardanza',
    fechas: ['2026-04-22'], cantidad: 7, unidad: 'minutos',
    estado: 'pendiente', origen: 'automatica',
    observacion: 'Llegó 12 min tarde, tolerancia 5 min = 7 min tardanza',
    periodo: '2026-04',
  },
  {
    id: 3, empleadoId: 1, tipo: 'tardanza',
    fechas: ['2026-04-16'], cantidad: 15, unidad: 'minutos',
    estado: 'aprobada', origen: 'automatica',
    observacion: 'Llegó 20 min tarde, tolerancia 5 min = 15 min tardanza',
    periodo: '2026-04',
  },

  // Automatic - Horas extra
  {
    id: 4, empleadoId: 3, tipo: 'horas_extra_50',
    fechas: ['2026-04-21'], cantidad: 75, unidad: 'minutos',
    estado: 'pendiente', origen: 'automatica',
    observacion: '1h 15min extra en día hábil',
    periodo: '2026-04',
  },
  {
    id: 5, empleadoId: 3, tipo: 'horas_extra_50',
    fechas: ['2026-04-17'], cantidad: 15, unidad: 'minutos',
    estado: 'aprobada', origen: 'automatica',
    observacion: '15 min extra en día hábil',
    periodo: '2026-04',
  },

  // Automatic - Ausencia injustificada
  {
    id: 6, empleadoId: 3, tipo: 'ausencia_injustificada',
    fechas: ['2026-04-16'], cantidad: 1, unidad: 'dias',
    estado: 'pendiente', origen: 'automatica',
    observacion: 'Sin fichada de entrada registrada',
    periodo: '2026-04',
  },

  // Manual - Licencia enfermedad
  {
    id: 7, empleadoId: 7, tipo: 'licencia_enfermedad',
    fechas: ['2026-04-14', '2026-04-15', '2026-04-16', '2026-04-17', '2026-04-18'],
    cantidad: 5, unidad: 'dias',
    estado: 'aprobada', origen: 'manual',
    observacion: 'Certificado médico presentado. Diagnóstico: gripe',
    periodo: '2026-04',
  },

  // Manual - Vacaciones
  {
    id: 8, empleadoId: 5, tipo: 'vacaciones',
    fechas: ['2026-04-07', '2026-04-08', '2026-04-09', '2026-04-10', '2026-04-11'],
    cantidad: 5, unidad: 'dias',
    estado: 'aprobada', origen: 'manual',
    observacion: 'Vacaciones primera quincena',
    periodo: '2026-04',
  },

  // Manual - Permiso especial
  {
    id: 9, empleadoId: 6, tipo: 'permiso_especial',
    fechas: ['2026-04-15'], cantidad: 1, unidad: 'dias',
    estado: 'aprobada', origen: 'manual',
    observacion: 'Nacimiento de hijo',
    periodo: '2026-04',
  },

  // Manual - Suspensión
  {
    id: 10, empleadoId: 7, tipo: 'suspension',
    fechas: ['2026-04-21', '2026-04-22', '2026-04-23'],
    cantidad: 3, unidad: 'dias',
    estado: 'aprobada', origen: 'manual',
    observacion: 'Suspensión disciplinaria sin goce de sueldo',
    periodo: '2026-04',
  },

  // Manual - Licencia examen
  {
    id: 11, empleadoId: 8, tipo: 'licencia_examen',
    fechas: ['2026-04-25'], cantidad: 1, unidad: 'dias',
    estado: 'pendiente', origen: 'manual',
    observacion: 'Examen final Universidad — presentó comprobante de inscripción',
    periodo: '2026-04',
  },

  // Automatic - Salida anticipada
  {
    id: 12, empleadoId: 6, tipo: 'salida_anticipada',
    fechas: ['2026-04-18'], cantidad: 30, unidad: 'minutos',
    estado: 'rechazada', origen: 'automatica',
    observacion: 'Salió 30 min antes del horario',
    periodo: '2026-04',
  },

  // March data (closed period)
  {
    id: 13, empleadoId: 1, tipo: 'tardanza',
    fechas: ['2026-03-05', '2026-03-12', '2026-03-19'],
    cantidad: 45, unidad: 'minutos',
    estado: 'aprobada', origen: 'automatica',
    observacion: 'Tardanzas acumuladas del período',
    periodo: '2026-03',
  },
  {
    id: 14, empleadoId: 2, tipo: 'horas_extra_50',
    fechas: ['2026-03-08', '2026-03-15'],
    cantidad: 180, unidad: 'minutos',
    estado: 'aprobada', origen: 'automatica',
    observacion: '3 horas extra acumuladas en días hábiles',
    periodo: '2026-03',
  },
  {
    id: 15, empleadoId: 3, tipo: 'horas_extra_100',
    fechas: ['2026-03-09'], cantidad: 480, unidad: 'minutos',
    estado: 'aprobada', origen: 'automatica',
    observacion: '8 horas extra en domingo',
    periodo: '2026-03',
  },
];
