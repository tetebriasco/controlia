import { useState } from 'react';
import { Search, Plus, Clock, ArrowUpRight, ArrowDownLeft, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { fichadas as fichadasData } from '../../data/fichadas';
import { empleados } from '../../data/empleados';
import './FichadasPage.css';

export function FichadasPage() {
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('2026-04-22');
  const [showModal, setShowModal] = useState(false);

  const isAdmin = user?.rol === 'admin';
  const fichadasForView = isAdmin
    ? fichadasData
    : fichadasData.filter((f) => f.empleadoId === 2); // María for employee view

  const filtered = fichadasForView
    .filter((f) => {
      const fichadaDate = f.timestamp.split('T')[0];
      const matchDate = !dateFilter || fichadaDate === dateFilter;
      if (!search) return matchDate;
      const emp = empleados.find((e) => e.id === f.empleadoId);
      const matchSearch = emp
        ? `${emp.nombre} ${emp.apellido} ${emp.legajo}`.toLowerCase().includes(search.toLowerCase())
        : false;
      return matchDate && matchSearch;
    })
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const getEmpleadoName = (id: number) => {
    const emp = empleados.find((e) => e.id === id);
    return emp ? `${emp.nombre} ${emp.apellido}` : `Empleado #${id}`;
  };

  const getEmpleadoInitials = (id: number) => {
    const emp = empleados.find((e) => e.id === id);
    if (!emp) return '??';
    return `${emp.nombre[0]}${emp.apellido[0]}`;
  };

  return (
    <div className="fichadas-page animate-fade-in">
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
                id="search-fichadas"
              />
            </div>
          )}
          <div className="form-group" style={{ minWidth: 160 }}>
            <input
              type="date"
              className="form-input"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              id="filter-fecha"
            />
          </div>
        </div>
        {isAdmin && (
          <div className="page-toolbar-right">
            <button className="btn btn-primary" onClick={() => setShowModal(true)} id="btn-fichada-manual">
              <Plus size={16} /> Fichada Manual
            </button>
          </div>
        )}
      </div>

      {/* Summary cards for the day */}
      <div className="stats-grid" style={{ marginBottom: '24px' }}>
        <div className="stat-card">
          <div className="stat-icon green"><ArrowUpRight size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Entradas</span>
            <span className="stat-value">
              {filtered.filter((f) => f.tipo === 'entrada').length}
            </span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><ArrowDownLeft size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Salidas</span>
            <span className="stat-value">
              {filtered.filter((f) => f.tipo === 'salida').length}
            </span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon teal"><Clock size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Total Fichadas</span>
            <span className="stat-value">{filtered.length}</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            Fichadas del {dateFilter ? new Date(dateFilter + 'T12:00:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' }) : 'período'}
          </h3>
        </div>
        <div className="card-body" style={{ padding: 0 }}>
          <div className="data-table-wrapper">
            <table className="data-table" id="tabla-fichadas">
              <thead>
                <tr>
                  {isAdmin && <th>Empleado</th>}
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Tipo</th>
                  <th>Origen</th>
                  {isAdmin && <th>Registrado por</th>}
                  <th>Obs.</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={isAdmin ? 7 : 5} style={{ textAlign: 'center', padding: '40px', color: 'var(--gris-texto)' }}>
                      No hay fichadas para esta fecha
                    </td>
                  </tr>
                ) : (
                  filtered.map((f) => {
                    const d = new Date(f.timestamp);
                    return (
                      <tr key={f.id}>
                        {isAdmin && (
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{
                                width: 28, height: 28, borderRadius: '50%',
                                background: 'var(--azul-principal-light)', color: 'var(--azul-principal)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '11px', fontWeight: 600, flexShrink: 0,
                              }}>
                                {getEmpleadoInitials(f.empleadoId)}
                              </div>
                              <span style={{ fontWeight: 500, fontSize: '13px' }}>{getEmpleadoName(f.empleadoId)}</span>
                            </div>
                          </td>
                        )}
                        <td>{d.toLocaleDateString('es-AR')}</td>
                        <td style={{ fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
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
                        {isAdmin && (
                          <td style={{ fontSize: '12px', color: 'var(--gris-texto)' }}>
                            {f.origen === 'manual' ? getEmpleadoName(f.usuarioRegistro || 0) : '—'}
                          </td>
                        )}
                        <td style={{ fontSize: '12px', color: 'var(--gris-texto)', maxWidth: 200 }}>
                          {f.motivo || (f.esCorreccion ? 'Corrección' : '—')}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Manual fichada modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Registrar Fichada Manual</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Empleado</label>
                  <select className="form-select" id="modal-empleado">
                    <option value="">Seleccionar empleado...</option>
                    {empleados.filter((e) => e.estado === 'activo').map((e) => (
                      <option key={e.id} value={e.id}>{e.nombre} {e.apellido} (#{e.legajo})</option>
                    ))}
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Fecha</label>
                    <input type="date" className="form-input" defaultValue="2026-04-22" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Hora</label>
                    <input type="time" className="form-input" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Tipo</label>
                  <select className="form-select">
                    <option value="entrada">Entrada</option>
                    <option value="salida">Salida</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Motivo</label>
                  <textarea className="form-textarea" placeholder="Explicar el motivo de la fichada manual..." />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn btn-primary" onClick={() => setShowModal(false)}>Registrar Fichada</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
