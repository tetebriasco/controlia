import { useNavigate } from 'react-router-dom';
import {
  Users, Clock, AlertTriangle, TrendingUp,
  UserPlus, ClipboardList, FileBarChart, ArrowRight,
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import { empleados } from '../../data/empleados';
import { novedades } from '../../data/novedades';

const weeklyData = [
  { day: 'Lun', presentes: 8, ausentes: 0, tardanzas: 1 },
  { day: 'Mar', presentes: 7, ausentes: 1, tardanzas: 2 },
  { day: 'Mié', presentes: 8, ausentes: 0, tardanzas: 0 },
  { day: 'Jue', presentes: 6, ausentes: 2, tardanzas: 1 },
  { day: 'Vie', presentes: 7, ausentes: 1, tardanzas: 0 },
];

const novedadesPorTipo = [
  { name: 'Tardanzas', value: 3, color: '#F59E0B' },
  { name: 'Horas Extra', value: 2, color: '#17BEBB' },
  { name: 'Ausencias', value: 1, color: '#EF4444' },
  { name: 'Licencias', value: 3, color: '#2563EB' },
];

const recentActivity = [
  { text: 'Juan Pérez fichó entrada a las 09:12', time: 'Hace 10 min', color: 'green' as const },
  { text: 'María Gómez — tardanza detectada (15 min)', time: 'Hace 25 min', color: 'yellow' as const },
  { text: 'Carlos López — 1h 15min horas extra registradas', time: 'Hace 1 hora', color: 'teal' as const },
  { text: 'Diego Silva — suspensión cargada (3 días)', time: 'Hace 2 horas', color: 'red' as const },
  { text: 'Valentina Torres — licencia examen solicitada', time: 'Hace 3 horas', color: 'blue' as const },
];

export function AdminDashboard() {
  const navigate = useNavigate();

  const activeEmployees = empleados.filter((e) => e.estado === 'activo').length;
  const pendingNovedades = novedades.filter((n) => n.estado === 'pendiente').length;
  // Simulated today stats
  const presentToday = 6;
  const tardanzasToday = 2;

  return (
    <div className="dashboard-page">
      <div className="dashboard-welcome">
        <h2>Buenos días, Administrador 👋</h2>
        <p>Resumen del estado actual del sistema</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card" id="stat-empleados">
          <div className="stat-icon blue"><Users size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Empleados Activos</span>
            <span className="stat-value">{activeEmployees}</span>
            <span className="stat-change up">+1 este mes</span>
          </div>
        </div>
        <div className="stat-card" id="stat-presentes">
          <div className="stat-icon green"><Clock size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Presentes Hoy</span>
            <span className="stat-value">{presentToday}</span>
            <span className="stat-change up">de {activeEmployees} activos</span>
          </div>
        </div>
        <div className="stat-card" id="stat-tardanzas">
          <div className="stat-icon yellow"><AlertTriangle size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Tardanzas Hoy</span>
            <span className="stat-value">{tardanzasToday}</span>
            <span className="stat-change down">↑ vs ayer</span>
          </div>
        </div>
        <div className="stat-card" id="stat-novedades">
          <div className="stat-icon red"><TrendingUp size={24} /></div>
          <div className="stat-info">
            <span className="stat-label">Novedades Pendientes</span>
            <span className="stat-value">{pendingNovedades}</span>
            <span className="stat-change down">requieren revisión</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="quick-action" onClick={() => navigate('/empleados/nuevo')} id="qa-nuevo-empleado">
          <div className="quick-action-icon" style={{ background: 'var(--azul-principal-light)', color: 'var(--azul-principal)' }}>
            <UserPlus size={18} />
          </div>
          Nuevo Empleado
        </button>
        <button className="quick-action" onClick={() => navigate('/fichadas')} id="qa-fichadas">
          <div className="quick-action-icon" style={{ background: 'var(--verde-light)', color: 'var(--verde)' }}>
            <Clock size={18} />
          </div>
          Ver Fichadas
        </button>
        <button className="quick-action" onClick={() => navigate('/novedades')} id="qa-novedades">
          <div className="quick-action-icon" style={{ background: 'var(--amarillo-light)', color: 'var(--amarillo)' }}>
            <ClipboardList size={18} />
          </div>
          Gestionar Novedades
        </button>
        <button className="quick-action" onClick={() => navigate('/cierre')} id="qa-cierre">
          <div className="quick-action-icon" style={{ background: 'var(--turquesa-light)', color: 'var(--turquesa)' }}>
            <FileBarChart size={18} />
          </div>
          Cierre Mensual
        </button>
      </div>

      {/* Charts row */}
      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Asistencia Semanal</h3>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5EAF2" />
                  <XAxis dataKey="day" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '8px',
                      border: '1px solid #E5EAF2',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    }}
                  />
                  <Bar dataKey="presentes" fill="#22C55E" radius={[4, 4, 0, 0]} name="Presentes" />
                  <Bar dataKey="tardanzas" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Tardanzas" />
                  <Bar dataKey="ausentes" fill="#EF4444" radius={[4, 4, 0, 0]} name="Ausentes" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Novedades por Tipo</h3>
          </div>
          <div className="card-body">
            <div className="chart-container" style={{ display: 'flex', alignItems: 'center' }}>
              <ResponsiveContainer width="50%" height="100%">
                <PieChart>
                  <Pie
                    data={novedadesPorTipo}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {novedadesPorTipo.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {novedadesPorTipo.map((item) => (
                  <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                    <div style={{ width: 12, height: 12, borderRadius: 3, background: item.color, flexShrink: 0 }} />
                    <span style={{ color: '#64748B' }}>{item.name}</span>
                    <span style={{ fontWeight: 600, marginLeft: 'auto' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-section" style={{ marginTop: 'var(--space-8)' }}>
        <div className="dashboard-section-header">
          <h3 className="dashboard-section-title">Actividad Reciente</h3>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/fichadas')}>
            Ver todo <ArrowRight size={14} />
          </button>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="activity-list">
              {recentActivity.map((activity, i) => (
                <div className="activity-item" key={i}>
                  <div className={`activity-dot ${activity.color}`} />
                  <div className="activity-content">
                    <div className="activity-text">{activity.text}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
