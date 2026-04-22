import { useState } from 'react';
import { CheckCircle, AlertTriangle, FileBarChart, Download, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cierres } from '../../data/cierres';
import { empleados } from '../../data/empleados';
import { novedades } from '../../data/novedades';

const periodoLabel = (periodo: string) => {
  const [year, month] = periodo.split('-');
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return `${months[parseInt(month) - 1]} ${year}`;
};

export function CierrePage() {
  const { user } = useAuth();
  const [selectedCierre, setSelectedCierre] = useState(cierres[0]);
  const isAdmin = user?.rol === 'admin';

  const pendingNovedades = novedades.filter(
    (n) => n.periodo === '2026-04' && n.estado === 'pendiente'
  ).length;

  return (
    <div className="animate-fade-in">
      {/* Period selector */}
      <div className="page-toolbar">
        <div className="page-toolbar-left">
          <div className="filter-tabs">
            {cierres.map((c) => (
              <button
                key={c.id}
                className={`filter-tab ${selectedCierre.id === c.id ? 'active' : ''}`}
                onClick={() => setSelectedCierre(c)}
              >
                {periodoLabel(c.periodo)}
              </button>
            ))}
          </div>
        </div>
        <div className="page-toolbar-right">
          <span className={`badge badge-${selectedCierre.estado}`}>
            {selectedCierre.estado === 'cerrado' ? '✓ Cerrado' : '⏳ Borrador'}
          </span>
        </div>
      </div>

      {/* Status overview for draft */}
      {selectedCierre.estado === 'borrador' && isAdmin && (
        <div className="stats-grid" style={{ marginBottom: '24px' }}>
          <div className="stat-card">
            <div className="stat-icon yellow"><AlertTriangle size={24} /></div>
            <div className="stat-info">
              <span className="stat-label">Novedades Pendientes</span>
              <span className="stat-value">{pendingNovedades}</span>
              <span className="stat-change down">Requieren aprobación antes del cierre</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon blue"><FileBarChart size={24} /></div>
            <div className="stat-info">
              <span className="stat-label">Estado</span>
              <span className="stat-value" style={{ fontSize: '1.2rem' }}>En revisión</span>
              <span className="stat-change">Resuelva todas las novedades pendientes</span>
            </div>
          </div>
        </div>
      )}

      {/* Wizard steps for admin in draft */}
      {selectedCierre.estado === 'borrador' && isAdmin && (
        <div className="card" style={{ marginBottom: '24px' }}>
          <div className="card-header">
            <h3 className="card-title">Proceso de Cierre — {periodoLabel(selectedCierre.periodo)}</h3>
          </div>
          <div className="card-body">
            <div style={{ display: 'flex', gap: '16px', overflowX: 'auto' }}>
              {[
                { step: 1, title: 'Revisión', desc: 'Verificar fichadas y novedades pendientes', active: true },
                { step: 2, title: 'Validación', desc: 'Aprobar o rechazar novedades', active: false },
                { step: 3, title: 'Resumen', desc: 'Generar resumen por empleado', active: false },
                { step: 4, title: 'Exportación', desc: 'Exportar Excel/CSV/PDF', active: false },
              ].map((s) => (
                <div
                  key={s.step}
                  style={{
                    flex: 1,
                    minWidth: 180,
                    padding: '20px',
                    background: s.active ? 'var(--azul-principal-light)' : 'var(--gris-muy-claro)',
                    borderRadius: '12px',
                    border: s.active ? '2px solid var(--azul-principal)' : '2px solid transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: s.active ? 'var(--azul-principal)' : 'var(--gris-medio)',
                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 700,
                  }}>
                    {s.step}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>{s.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--gris-texto)' }}>{s.desc}</div>
                  {s.step < 4 && (
                    <ChevronRight
                      size={16}
                      style={{
                        position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)',
                        color: 'var(--gris-medio)',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button className="btn btn-outline" disabled={pendingNovedades > 0}>
              <CheckCircle size={16} /> Cerrar Período
            </button>
          </div>
        </div>
      )}

      {/* Summary table for closed periods */}
      {selectedCierre.resumenEmpleados.length > 0 && (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Resumen de Preliquidación</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn btn-outline btn-sm"><Download size={14} /> Excel</button>
              <button className="btn btn-outline btn-sm"><Download size={14} /> CSV</button>
              <button className="btn btn-outline btn-sm"><Download size={14} /> PDF</button>
            </div>
          </div>
          <div className="card-body" style={{ padding: 0 }}>
            <div className="data-table-wrapper">
              <table className="data-table" id="tabla-cierre">
                <thead>
                  <tr>
                    <th>Empleado</th>
                    <th>Días Trab.</th>
                    <th>Aus. Just.</th>
                    <th>Aus. Injust.</th>
                    <th>Hs Extra 50%</th>
                    <th>Hs Extra 100%</th>
                    <th>Tardanzas</th>
                    <th>Novedades</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCierre.resumenEmpleados.map((re) => {
                    const emp = empleados.find((e) => e.id === re.empleadoId);
                    if (!emp) return null;
                    return (
                      <tr key={re.empleadoId}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{
                              width: 28, height: 28, borderRadius: '50%',
                              background: 'var(--azul-principal-light)', color: 'var(--azul-principal)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '11px', fontWeight: 600,
                            }}>
                              {emp.nombre[0]}{emp.apellido[0]}
                            </div>
                            <span style={{ fontWeight: 500 }}>{emp.nombre} {emp.apellido}</span>
                          </div>
                        </td>
                        <td style={{ fontWeight: 600 }}>{re.diasTrabajados}</td>
                        <td>{re.ausenciasJustificadas}</td>
                        <td>
                          {re.ausenciasInjustificadas > 0 ? (
                            <span style={{ color: 'var(--rojo)', fontWeight: 600 }}>{re.ausenciasInjustificadas}</span>
                          ) : '0'}
                        </td>
                        <td>{re.horasExtra50 > 0 ? `${Math.floor(re.horasExtra50 / 60)}h ${re.horasExtra50 % 60}m` : '—'}</td>
                        <td>{re.horasExtra100 > 0 ? `${Math.floor(re.horasExtra100 / 60)}h ${re.horasExtra100 % 60}m` : '—'}</td>
                        <td>{re.tardanzasAcumuladas > 0 ? `${re.tardanzasAcumuladas} min` : '—'}</td>
                        <td>
                          <span className="badge badge-activo">{re.novedadesAprobadas.length}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
