import type { Fichada } from '../types';

// Fichadas for April 2026 — varied data to demonstrate the system
export const fichadas: Fichada[] = [
  // === April 21 (Monday) ===
  // Juan Pérez — Normal day
  { id: 1, empleadoId: 1, timestamp: '2026-04-21T08:57:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 2, empleadoId: 1, timestamp: '2026-04-21T13:02:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },
  { id: 3, empleadoId: 1, timestamp: '2026-04-21T14:00:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 4, empleadoId: 1, timestamp: '2026-04-21T18:05:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },

  // María Gómez — Late arrival
  { id: 5, empleadoId: 2, timestamp: '2026-04-21T14:25:00', tipo: 'entrada', origen: 'qr', esCorreccion: false },
  { id: 6, empleadoId: 2, timestamp: '2026-04-21T18:15:00', tipo: 'salida', origen: 'qr', esCorreccion: false },
  { id: 7, empleadoId: 2, timestamp: '2026-04-21T18:35:00', tipo: 'entrada', origen: 'qr', esCorreccion: false },
  { id: 8, empleadoId: 2, timestamp: '2026-04-21T22:00:00', tipo: 'salida', origen: 'qr', esCorreccion: false },

  // Carlos López — Overtime
  { id: 9, empleadoId: 3, timestamp: '2026-04-21T08:55:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 10, empleadoId: 3, timestamp: '2026-04-21T13:00:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },
  { id: 11, empleadoId: 3, timestamp: '2026-04-21T13:55:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 12, empleadoId: 3, timestamp: '2026-04-21T19:30:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },

  // Roberto Martínez — Normal afternoon shift
  { id: 13, empleadoId: 5, timestamp: '2026-04-21T13:58:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 14, empleadoId: 5, timestamp: '2026-04-21T18:00:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },
  { id: 15, empleadoId: 5, timestamp: '2026-04-21T18:30:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 16, empleadoId: 5, timestamp: '2026-04-21T22:05:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },

  // Ana Rodríguez — Normal shift
  { id: 17, empleadoId: 6, timestamp: '2026-04-21T14:02:00', tipo: 'entrada', origen: 'qr', esCorreccion: false },
  { id: 18, empleadoId: 6, timestamp: '2026-04-21T18:00:00', tipo: 'salida', origen: 'qr', esCorreccion: false },
  { id: 19, empleadoId: 6, timestamp: '2026-04-21T18:32:00', tipo: 'entrada', origen: 'qr', esCorreccion: false },
  { id: 20, empleadoId: 6, timestamp: '2026-04-21T22:00:00', tipo: 'salida', origen: 'qr', esCorreccion: false },

  // Valentina Torres — Normal day
  { id: 21, empleadoId: 8, timestamp: '2026-04-21T08:50:00', tipo: 'entrada', origen: 'pin', esCorreccion: false },
  { id: 22, empleadoId: 8, timestamp: '2026-04-21T13:00:00', tipo: 'salida', origen: 'pin', esCorreccion: false },
  { id: 23, empleadoId: 8, timestamp: '2026-04-21T14:05:00', tipo: 'entrada', origen: 'pin', esCorreccion: false },
  { id: 24, empleadoId: 8, timestamp: '2026-04-21T18:00:00', tipo: 'salida', origen: 'pin', esCorreccion: false },

  // === April 22 (Tuesday - Today) ===
  // Juan Pérez — Late today
  { id: 25, empleadoId: 1, timestamp: '2026-04-22T09:12:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 26, empleadoId: 1, timestamp: '2026-04-22T13:05:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },
  { id: 27, empleadoId: 1, timestamp: '2026-04-22T14:00:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },

  // Carlos López — On time
  { id: 28, empleadoId: 3, timestamp: '2026-04-22T09:00:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },

  // Laura Fernández — Part time, today is not a work day (Tuesday)
  // No fichadas expected

  // Roberto Martínez — Not arrived yet (afternoon)
  { id: 29, empleadoId: 5, timestamp: '2026-04-22T14:05:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },

  // Valentina Torres — On time
  { id: 30, empleadoId: 8, timestamp: '2026-04-22T08:55:00', tipo: 'entrada', origen: 'pin', esCorreccion: false },

  // === April 18 (Friday of last week) ===
  { id: 31, empleadoId: 1, timestamp: '2026-04-18T08:58:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 32, empleadoId: 1, timestamp: '2026-04-18T18:02:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },
  { id: 33, empleadoId: 3, timestamp: '2026-04-18T09:01:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 34, empleadoId: 3, timestamp: '2026-04-18T18:00:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },
  { id: 35, empleadoId: 8, timestamp: '2026-04-18T09:03:00', tipo: 'entrada', origen: 'pin', esCorreccion: false },
  { id: 36, empleadoId: 8, timestamp: '2026-04-18T18:10:00', tipo: 'salida', origen: 'pin', esCorreccion: false },

  // === April 17 (Thursday) ===
  { id: 37, empleadoId: 1, timestamp: '2026-04-17T09:00:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 38, empleadoId: 1, timestamp: '2026-04-17T18:00:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },
  { id: 39, empleadoId: 2, timestamp: '2026-04-17T14:00:00', tipo: 'entrada', origen: 'qr', esCorreccion: false },
  { id: 40, empleadoId: 2, timestamp: '2026-04-17T22:00:00', tipo: 'salida', origen: 'qr', esCorreccion: false },

  // Manual correction example
  { id: 41, empleadoId: 3, timestamp: '2026-04-17T09:00:00', tipo: 'entrada', origen: 'manual', usuarioRegistro: 1, motivo: 'Olvidó fichar, ingresó a horario según supervisor', esCorreccion: false },
  { id: 42, empleadoId: 3, timestamp: '2026-04-17T18:15:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },

  // === April 16 (Wednesday) ===
  { id: 43, empleadoId: 1, timestamp: '2026-04-16T09:20:00', tipo: 'entrada', origen: 'biometrico', esCorreccion: false },
  { id: 44, empleadoId: 1, timestamp: '2026-04-16T18:00:00', tipo: 'salida', origen: 'biometrico', esCorreccion: false },

  // No fichada for empleado 3 on this day — absence
];
