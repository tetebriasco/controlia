import { useState, useEffect } from 'react';
import { LogIn, LogOut as LogOutIcon, Clock, CalendarDays, AlertCircle } from 'lucide-react';
import { fichadas } from '../../data/fichadas';
import { novedades } from '../../data/novedades';

export function EmpleadoDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClockedIn, setIsClockedIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = currentTime.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateStr = currentTime.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Employee ID 2 (María Gómez) data
  const myFichadas = fichadas
    .filter((f) => f.empleadoId === 2)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 8);

  const myNovedades = novedades
    .filter((n) => n.empleadoId === 2 && n.periodo === '2026-04')
    .slice(0, 5);

  const handleFichar = (tipo: 'entrada' | 'salida') => {
    setIsClockedIn(tipo === 'entrada');
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-welcome">
        <h2>Hola, María 👋</h2>
        <p>Turno Tarde — Comercio (14:00 a 22:00)</p>
      </div>

      <div className="grid-2">
        {/* Clock Widget */}
        <div className="card">
          <div className="card-body">
            <div className="clock-widget">
              <div className="clock-time">{timeStr}</div>
              <div className="clock-date">{dateStr}</div>
              <div className={`clock-status ${isClockedIn ? 'in' : 'out'}`}>
                <Clock size={14} />
                {isClockedIn ? 'Fichada de entrada registrada' : 'Sin fichar'}
              </div>
              <div className="clock-buttons">
                <button
                  className="clock-btn entrada"
                  disabled={isClockedIn}
                  onClick={() => handleFichar('entrada')}
                  id="btn-fichar-entrada"
                >
                  <LogIn size={20} />
                  Entrada
                </button>
                <button
                  className="clock-btn salida"
                  disabled={!isClockedIn}
                  onClick={() => handleFichar('salida')}
                  id="btn-fichar-salida"
                >
                  <LogOutIcon size={20} />
                  Salida
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* My Schedule */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Mi Horario</h3>
            <CalendarDays size={18} style={{ color: 'var(--gris-texto)' }} />
          </div>
          <div className="card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--gris-muy-claro)', borderRadius: '8px' }}>
                <span style={{ color: 'var(--gris-texto)', fontSize: '14px' }}>Turno</span>
                <span style={{ fontWeight: 600 }}>Tarde — Comercio</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--gris-muy-claro)', borderRadius: '8px' }}>
                <span style={{ color: 'var(--gris-texto)', fontSize: '14px' }}>Horario</span>
                <span style={{ fontWeight: 600 }}>14:00 — 22:00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--gris-muy-claro)', borderRadius: '8px' }}>
                <span style={{ color: 'var(--gris-texto)', fontSize: '14px' }}>Descanso</span>
                <span style={{ fontWeight: 600 }}>18:00 — 18:30</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--gris-muy-claro)', borderRadius: '8px' }}>
                <span style={{ color: 'var(--gris-texto)', fontSize: '14px' }}>Días laborales</span>
                <span style={{ fontWeight: 600 }}>Lun a Sáb</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--gris-muy-claro)', borderRadius: '8px' }}>
                <span style={{ color: 'var(--gris-texto)', fontSize: '14px' }}>Tolerancia</span>
                <span style={{ fontWeight: 600 }}>10 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Fichadas */}
      <div className="dashboard-section" style={{ marginTop: '32px' }}>
        <div className="dashboard-section-header">
          <h3 className="dashboard-section-title">Mis Últimas Fichadas</h3>
        </div>
        <div className="card">
          <div className="card-body" style={{ padding: 0 }}>
            <div className="data-table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Tipo</th>
                    <th>Origen</th>
                  </tr>
                </thead>
                <tbody>
                  {myFichadas.map((f) => {
                    const d = new Date(f.timestamp);
                    return (
                      <tr key={f.id}>
                        <td>{d.toLocaleDateString('es-AR')}</td>
                        <td style={{ fontWeight: 600 }}>
                          {d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td>
                          <span className={`badge badge-${f.tipo}`}>
                            {f.tipo === 'entrada' ? '↗ Entrada' : '↙ Salida'}
                          </span>
                        </td>
                        <td>
                          <span className={`badge badge-${f.origen}`}>
                            {f.origen.charAt(0).toUpperCase() + f.origen.slice(1)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* My Novedades */}
      <div className="dashboard-section">
        <div className="dashboard-section-header">
          <h3 className="dashboard-section-title">Mis Novedades del Período</h3>
        </div>
        <div className="card">
          <div className="card-body">
            {myNovedades.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon"><AlertCircle size={28} /></div>
                <div className="empty-state-title">Sin novedades</div>
                <div className="empty-state-text">No tenés novedades registradas en este período.</div>
              </div>
            ) : (
              <div className="activity-list">
                {myNovedades.map((n) => (
                  <div className="activity-item" key={n.id}>
                    <div className={`activity-dot ${
                      n.tipo.includes('tardanza') ? 'yellow' :
                      n.tipo.includes('ausencia') ? 'red' :
                      n.tipo.includes('horas_extra') ? 'teal' : 'blue'
                    }`} />
                    <div className="activity-content">
                      <div className="activity-text">
                        {n.observacion}
                      </div>
                      <div className="activity-time">
                        {n.fechas[0]} · <span className={`badge badge-${n.estado}`}>{n.estado}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
