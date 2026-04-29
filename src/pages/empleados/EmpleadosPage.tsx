import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Eye, Edit, Filter, Trash2 } from 'lucide-react';
import { empleadoService } from '../../services/empleado.service';
import type { Empleado, EstadoEmpleado } from '../../types';
import './EmpleadosPage.css';

export function EmpleadosPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<EstadoEmpleado | 'todos'>('todos');
  
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEmpleados = async () => {
    try {
      setLoading(true);
      const data = await empleadoService.getAll();
      setEmpleados(data);
      setError(null);
    } catch (err: any) {
      setError('Error al obtener empleados: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Estás seguro que deseas eliminar este empleado?')) {
      try {
        await empleadoService.delete(id);
        setEmpleados(empleados.filter(e => e.id !== id));
      } catch (err: any) {
        alert('No se pudo eliminar: ' + err.message);
      }
    }
  };

  type SortKey = 'legajo' | 'nombre' | 'dni' | 'categoriaLaboral' | 'tipoJornada' | 'estado';
  const [sortKey, setSortKey] = useState<SortKey>('legajo');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const filtered = empleados.filter((e) => {
    const matchSearch =
      e.nombre.toLowerCase().includes(search.toLowerCase()) ||
      e.apellido.toLowerCase().includes(search.toLowerCase()) ||
      e.legajo.includes(search) ||
      e.dni.includes(search);
    const matchStatus = statusFilter === 'todos' || e.estado === statusFilter;
    return matchSearch && matchStatus;
  });

  const sorted = [...filtered].sort((a, b) => {
    let valA = a[sortKey];
    let valB = b[sortKey];
    if (typeof valA === 'string' && typeof valB === 'string') {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }
    if (valA < valB) return sortDir === 'asc' ? -1 : 1;
    if (valA > valB) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const statusCounts = {
    todos: empleados.length,
    activo: empleados.filter((e) => e.estado === 'activo').length,
    inactivo: empleados.filter((e) => e.estado === 'inactivo').length,
    suspendido: empleados.filter((e) => e.estado === 'suspendido').length,
  };

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Cargando empleados...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;
  }

  return (
    <div className="empleados-page animate-fade-in">
      {/* Toolbar */}
      <div className="page-toolbar">
        <div className="page-toolbar-left">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por nombre, legajo o DNI..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="search-empleados"
            />
          </div>
          <div className="filter-tabs">
            {(['todos', 'activo', 'inactivo', 'suspendido'] as const).map((status) => (
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
            <Filter size={14} /> Filtros
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/empleados/nuevo')}
            id="btn-nuevo-empleado"
          >
            <Plus size={16} /> Nuevo Empleado
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="card-body" style={{ padding: 0 }}>
          <div className="data-table-wrapper">
            <table className="data-table" id="tabla-empleados">
              <thead>
                <tr>
                  <th onClick={() => handleSort('legajo')} style={{ cursor: 'pointer' }}>Legajo {sortKey === 'legajo' && (sortDir === 'asc' ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('nombre')} style={{ cursor: 'pointer' }}>Nombre Completo {sortKey === 'nombre' && (sortDir === 'asc' ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('dni')} style={{ cursor: 'pointer' }}>DNI {sortKey === 'dni' && (sortDir === 'asc' ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('categoriaLaboral')} style={{ cursor: 'pointer' }}>Categoría {sortKey === 'categoriaLaboral' && (sortDir === 'asc' ? '↑' : '↓')}</th>
                  <th>Horario</th>
                  <th onClick={() => handleSort('tipoJornada')} style={{ cursor: 'pointer', textAlign: 'center' }}>Jornada {sortKey === 'tipoJornada' && (sortDir === 'asc' ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('estado')} style={{ cursor: 'pointer', textAlign: 'center' }}>Estado {sortKey === 'estado' && (sortDir === 'asc' ? '↑' : '↓')}</th>
                  <th style={{ textAlign: 'center' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--azul-principal)' }}>
                        #{emp.legajo}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%',
                          background: 'var(--azul-principal-light)', color: 'var(--azul-principal)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '12px', fontWeight: 600, flexShrink: 0,
                        }}>
                          {emp.nombre[0]}{emp.apellido[0]}
                        </div>
                        <div>
                          <div style={{ fontWeight: 500 }}>{emp.nombre} {emp.apellido}</div>
                          <div style={{ fontSize: '12px', color: 'var(--gris-texto)' }}>{emp.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{emp.dni}</td>
                    <td>{emp.categoriaLaboral}</td>
                    <td style={{ fontSize: '12px' }}>{emp.horarios?.nombre || '—'}</td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`badge badge-${emp.tipoJornada === 'completa' ? 'activo' : 'pendiente'}`}>
                        {emp.tipoJornada.charAt(0).toUpperCase() + emp.tipoJornada.slice(1)}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`badge badge-${emp.estado}`}>
                        {emp.estado.charAt(0).toUpperCase() + emp.estado.slice(1)}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                        <button className="btn btn-ghost btn-sm" title="Ver detalle">
                          <Eye size={15} />
                        </button>
                        <button className="btn btn-ghost btn-sm" title="Editar" onClick={() => navigate(`/empleados/${emp.id}`)}>
                          <Edit size={15} />
                        </button>
                        <button className="btn btn-ghost btn-sm" title="Dar de baja" style={{ color: 'var(--rojo)' }} onClick={() => handleDelete(emp.id)}>
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: 'var(--gris-texto)' }}>
            Mostrando {filtered.length} de {empleados.length} empleados
          </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button className="btn btn-outline btn-sm" disabled>Anterior</button>
            <button className="btn btn-primary btn-sm">1</button>
            <button className="btn btn-outline btn-sm" disabled>Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
