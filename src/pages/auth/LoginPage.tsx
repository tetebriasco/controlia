import { useNavigate } from 'react-router-dom';
import { Shield, User, BarChart3, ChevronRight, Clock, FileText, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Logo } from '../../components/ui/Logo';
import type { UserRole } from '../../types';
import './LoginPage.css';

const roles: { role: UserRole; name: string; description: string; icon: React.ReactNode; colorClass: string }[] = [
  {
    role: 'admin',
    name: 'Administrador',
    description: 'Gestión completa del sistema: empleados, fichadas, novedades y cierre mensual',
    icon: <Shield size={24} />,
    colorClass: 'admin',
  },
  {
    role: 'empleado',
    name: 'Empleado',
    description: 'Registrar fichadas, consultar asistencias y ver novedades personales',
    icon: <User size={24} />,
    colorClass: 'empleado',
  },
  {
    role: 'contador',
    name: 'Contador Externo',
    description: 'Acceder a resúmenes de preliquidación y exportar informes del período',
    icon: <BarChart3 size={24} />,
    colorClass: 'contador',
  },
];

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    login(role);
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-card">
          <div className="login-logo">
            <Logo variant="full" size={36} />
          </div>

          <h1 className="login-heading">Bienvenido</h1>
          <p className="login-subheading">
            Seleccioná tu rol para ingresar al sistema
          </p>

          <div className="login-roles">
            {roles.map((r) => (
              <div
                key={r.role}
                className="role-card"
                onClick={() => handleLogin(r.role)}
                id={`login-role-${r.role}`}
              >
                <div className={`role-icon ${r.colorClass}`}>{r.icon}</div>
                <div className="role-info">
                  <div className="role-name">{r.name}</div>
                  <div className="role-desc">{r.description}</div>
                </div>
                <ChevronRight size={20} className="role-arrow" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-right-content">
          <h2 className="login-right-title">
            Control horario y novedades laborales, simplificado
          </h2>
          <p className="login-right-text">
            Centralizá la gestión de asistencia, fichadas y novedades de tu equipo.
            Prepará la información para tu contador en minutos, no en días.
          </p>

          <div className="login-features">
            <div className="login-feature">
              <div className="login-feature-icon">
                <Clock size={22} />
              </div>
              <span className="login-feature-label">Fichadas</span>
            </div>
            <div className="login-feature">
              <div className="login-feature-icon">
                <FileText size={22} />
              </div>
              <span className="login-feature-label">Novedades</span>
            </div>
            <div className="login-feature">
              <div className="login-feature-icon">
                <CheckCircle size={22} />
              </div>
              <span className="login-feature-label">Reportes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
