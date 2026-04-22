import { useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Clock,
  CalendarCheck,
  FileText,
  FileBarChart,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Logo } from '../ui/Logo';
import type { UserRole } from '../../types';
import './Sidebar.css';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  roles: UserRole[];
  badge?: number;
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard size={20} />,
    roles: ['admin', 'empleado', 'contador'],
  },
  {
    label: 'Empleados',
    path: '/empleados',
    icon: <Users size={20} />,
    roles: ['admin'],
  },
  {
    label: 'Horarios y Turnos',
    path: '/horarios',
    icon: <CalendarCheck size={20} />,
    roles: ['admin', 'empleado'],
  },
  {
    label: 'Fichadas',
    path: '/fichadas',
    icon: <Clock size={20} />,
    roles: ['admin', 'empleado'],
  },
  {
    label: 'Novedades',
    path: '/novedades',
    icon: <FileText size={20} />,
    roles: ['admin', 'empleado'],
    badge: 4,
  },
  {
    label: 'Cierre Mensual',
    path: '/cierre',
    icon: <FileBarChart size={20} />,
    roles: ['admin', 'contador'],
  },
  {
    label: 'Configuración',
    path: '/configuracion',
    icon: <Settings size={20} />,
    roles: ['admin'],
  },
];

export function Sidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!user) return null;

  const filteredItems = navItems.filter((item) => item.roles.includes(user.rol));

  const handleNav = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user.nombre
    .split(' ')
    .map((w) => w[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const roleLabels: Record<UserRole, string> = {
    admin: 'Administrador',
    empleado: 'Empleado',
    contador: 'Contador',
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Abrir menú"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`sidebar-overlay ${mobileOpen ? 'visible' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <Logo variant="full" size={28} light />
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-nav-section">
            <div className="sidebar-nav-label">Menú Principal</div>
            {filteredItems.slice(0, 2).map((item) => (
              <div
                key={item.path}
                className={`sidebar-nav-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                onClick={() => handleNav(item.path)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && user.rol === 'admin' && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </div>
            ))}
          </div>

          <div className="sidebar-nav-section">
            <div className="sidebar-nav-label">Gestión</div>
            {filteredItems.slice(2).map((item) => (
              <div
                key={item.path}
                className={`sidebar-nav-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                onClick={() => handleNav(item.path)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && user.rol === 'admin' && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-user-avatar">{initials}</div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name truncate">{user.nombre}</div>
              <div className="sidebar-user-role">{roleLabels[user.rol]}</div>
            </div>
            <button className="sidebar-logout" onClick={handleLogout} title="Cerrar sesión">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
