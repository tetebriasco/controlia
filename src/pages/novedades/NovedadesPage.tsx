import { useState } from 'react';
import { Search, Check, X, Filter, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { novedades as novedadesData } from '../../data/novedades';
import { empleados } from '../../data/empleados';
import type { EstadoNovedad, TipoNovedad } from '../../types';

const tipoLabels: Record<TipoNovedad, string> = {
  tardanza: 'Tardanza',
  ausencia_justificada: 'Ausencia Justificada',
  ausencia_injustificada: 'Ausencia Injustificada',
  horas_extra_50: 'Horas Extra 50%',
  horas_extra_100: 'Horas Extra 100%',
  salida_anticipada: 'Salida Anticipada',
  licencia_enfermedad: 'Licencia Enfermedad',
  licencia_examen: 'Licencia Examen',
  vacaciones: 'Vacaciones',
  suspension: 'Suspensión',
  permiso_especial: 'Permiso Especial',
  descanso_excedido: 'Descanso Excedido',
};

const tipoBadgeClass = (tipo: TipoNovedad): string => {
  if (tipo.includes('tardanza') || tipo.includes('descanso')) return 'badge-tardanza';
  if (tipo.includes('ausencia')) return 'badge-ausencia';
  if (tipo.includes('horas_extra')) return 'badge-horas-extra';
  return 'badge-licencia';
};

export function NovedadesPage() {
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<EstadoNovedad | 'todas'>('todas');
  const [periodo] = useState('2026-04');

  const isAdmin = user?.rol === 'admin';
  const novedadesView = isAdmin
    ? novedadesData.filter((n) => n.periodo === periodo)
    : novedadesData.filter((n) => n.empleadoId === 2 && n.periodo === periodo);

  const filtered = novedadesView.filter((n) => {
    const matchStatus = statusFilter === 'todas' || n.estado === statusFilter;
    if (!search) return matchStatus;
    const emp = empleados.find((e) => e.id === n.empleadoId);
    const matchSearch = emp
      ? `${emp.nombre} ${emp.apellido}`.toLowerCase().includes(search.toLowerCase())
      : false;
    return matchStatus && matchSearch;
  });

  const statusCounts = {
    todas: novedadesView.length,
    pendiente: novedadesView.filter((n) => n.estado === 'pendiente').length,
    aprobada: novedadesView.filter((n) => n.estado === 'aprobada').length,
    rechazada: novedadesView.filter((n) => n.estado === 'rechazada').length,
  };

  const getEmpleadoName = (id: number) => {
    const emp = empleados.find((e) => e.id === id);
    return emp ? `${emp.nombre} ${emp.apellido}` : `#${id}`;
  };

  return (
    <div className="animate-fade-in">
      {/* Toolbar */}
      <div className="page-toolbar">
        <div className="page-toolbar-left">
          {isAdmin && (
            <div className="search-bar">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar empleado..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="search-novedades"
              />
            </div>
          )}
          <div className="filter-tabs">
            {(['todas', 'pendiente', 'aprobada', 'rechazada'] as const).map((status) => (
              <button
                key={status}
                className={`filter-tab ${statusFilter === status ? 'active' : ''}`}
                onClick={() => setStatusFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                <span style={{ marginLeft: 4, opacity: 0.6 }}>({statusCounts[status]})</span>
              </button>
            ))}
          </div>
        </div>
        <div className="page-toolbar-right">
          <button className="btn btn-outline btn-sm">
            <Filter size={14} /> Período: Abril 2026
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="card-body" style={{ padding: 0 }}>
          <div className="data-table-wrapper">
            <table className="data-table" id="tabla-novedades">
              <thead>
                <tr>
                  {isAdmin && <th>Empleado</th>}
                  <th>Tipo</th>
                  <th>Fecha(s)</th>
                  <th>Cantidad</th>
                  <th>Origen</th>
                  <th>Estado</th>
                  <th>Observación</th>
                  {isAdmin && <th>Acciones</th>}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={isAdmin ? 8 : 6}>
                      <div className="empty-state" style={{ padding: '40px' }}>
                        <div className="empty-state-icon"><AlertCircle size={28} /></div>
                        <div className="empty-state-title">Sin novedades</div>
                        <div className="empty-state-text">No hay novedades para los filtros seleccionados.</div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((n) => (
                    <tr key={n.id}>
                      {isAdmin && (
                        <td style={{ fontWeight: 500 }}>{getEmpleadoName(n.empleadoId)}</td>
                      )}
                      <td>
                        <span className={`badge ${tipoBadgeClass(n.tipo)}`}>
                          {tipoLabels[n.tipo]}
                        </span>
                      </td>
                      <td style={{ fontSize: '12px' }}>
                        {n.fechas.length > 2
                          ? `${n.fechas[0]} → ${n.fechas[n.fechas.length - 1]}`
                          : n.fechas.join(', ')}
                      </td>
                      <td style={{ fontWeight: 600 }}>
                        {n.cantidad} {n.unidad}
                      </td>
                      <td>
                        <span className={`badge ${n.origen === 'automatica' ? 'badge-biometrico' : 'badge-manual'}`}>
                          {n.origen === 'automatica' ? '⚡ Automática' : '✏️ Manual'}
                        </span>
                      </td>
                      <td>
                        <span className={`badge badge-${n.estado}`}>
                          {n.estado.charAt(0).toUpperCase() + n.estado.slice(1)}
                        </span>
                      </td>
                      <td style={{ fontSize: '12px', color: 'var(--gris-texto)', maxWidth: '200px' }}>
                        <span className="truncate" style={{ display: 'block' }}>{n.observacion || '—'}</span>
                      </td>
                      {isAdmin && (
                        <td>
                          {n.estado === 'pendiente' ? (
                            <div style={{ display: 'flex', gap: '4px' }}>
                              <button className="btn btn-sm btn-success" title="Aprobar">
                                <Check size={14} />
                              </button>
                              <button className="btn btn-sm btn-danger" title="Rechazar">
                                <X size={14} />
                              </button>
                            </div>
                          ) : (
                            <span style={{ fontSize: '12px', color: 'var(--gris-texto)' }}>—</span>
                          )}
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
