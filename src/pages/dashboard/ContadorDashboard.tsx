import { useNavigate } from 'react-router-dom';
import { FileBarChart, Download, Calendar, ArrowRight } from 'lucide-react';
import { cierres } from '../../data/cierres';
import { empleados } from '../../data/empleados';

export function ContadorDashboard() {
  const navigate = useNavigate();

  const cierresCerrados = cierres.filter((c) => c.estado === 'cerrado');
  const lastCierre = cierresCerrados[cierresCerrados.length - 1];

  const periodoLabel = (periodo: string) => {
    const [year, month] = periodo.split('-');
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-welcome">
        <h2>Bienvenido, Cr. Daniel Méndez 📊</h2>
        <p>Acceso a resúmenes de preliquidación y exportación de informes</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue"><FileBarChart size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Períodos Cerrados</span>
            <span className="stat-value">{cierresCerrados.length}</span>
            <span className="stat-change up">Disponibles para exportar</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green"><Calendar size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Último Cierre</span>
            <span className="stat-value" style={{ fontSize: '1.5rem' }}>
              {lastCierre ? periodoLabel(lastCierre.periodo) : '—'}
            </span>
            <span className="stat-change up">
              {lastCierre?.fechaCierre ? `Cerrado el ${new Date(lastCierre.fechaCierre).toLocaleDateString('es-AR')}` : ''}
            </span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon teal"><Download size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Empleados en Resumen</span>
            <span className="stat-value">
              {lastCierre?.resumenEmpleados.length || 0}
            </span>
            <span className="stat-change up">en el último período</span>
          </div>
        </div>
      </div>

      {/* Last month summary table */}
      {lastCierre && (
        <div className="dashboard-section" style={{ marginTop: '32px' }}>
          <div className="dashboard-section-header">
            <h3 className="dashboard-section-title">
              Resumen de Preliquidación — {periodoLabel(lastCierre.periodo)}
            </h3>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/cierre')}>
              Ver detalle <ArrowRight size={14} />
            </button>
          </div>
          <div className="card">
            <div className="card-body" style={{ padding: 0 }}>
              <div className="data-table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Empleado</th>
                      <th>Días Trab.</th>
                      <th>Ausencias Just.</th>
                      <th>Ausencias Injust.</th>
                      <th>Hs Extra 50%</th>
                      <th>Hs Extra 100%</th>
                      <th>Tardanzas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lastCierre.resumenEmpleados.map((re) => {
                      const emp = empleados.find((e) => e.id === re.empleadoId);
                      if (!emp) return null;
                      return (
                        <tr key={re.empleadoId}>
                          <td style={{ fontWeight: 500 }}>{emp.nombre} {emp.apellido}</td>
                          <td>{re.diasTrabajados}</td>
                          <td>{re.ausenciasJustificadas}</td>
                          <td>
                            {re.ausenciasInjustificadas > 0 ? (
                              <span style={{ color: 'var(--rojo)', fontWeight: 600 }}>{re.ausenciasInjustificadas}</span>
                            ) : '0'}
                          </td>
                          <td>{re.horasExtra50 > 0 ? `${Math.floor(re.horasExtra50 / 60)}h ${re.horasExtra50 % 60}m` : '—'}</td>
                          <td>{re.horasExtra100 > 0 ? `${Math.floor(re.horasExtra100 / 60)}h ${re.horasExtra100 % 60}m` : '—'}</td>
                          <td>{re.tardanzasAcumuladas > 0 ? `${re.tardanzasAcumuladas} min` : '—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export options */}
      <div className="dashboard-section">
        <div className="dashboard-section-header">
          <h3 className="dashboard-section-title">Exportar Informes</h3>
        </div>
        <div className="quick-actions" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <button className="quick-action" id="export-excel">
            <div className="quick-action-icon" style={{ background: 'var(--verde-light)', color: 'var(--verde)' }}>
              <Download size={18} />
            </div>
            Exportar Excel
          </button>
          <button className="quick-action" id="export-csv">
            <div className="quick-action-icon" style={{ background: 'var(--azul-principal-light)', color: 'var(--azul-principal)' }}>
              <Download size={18} />
            </div>
            Exportar CSV
          </button>
          <button className="quick-action" id="export-pdf">
            <div className="quick-action-icon" style={{ background: 'var(--rojo-light)', color: 'var(--rojo)' }}>
              <Download size={18} />
            </div>
            Exportar PDF
          </button>
        </div>
      </div>
    </div>
  );
}
