import { Bell, Calendar } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import type { UserRole } from '../../types';
import './Header.css';

const pageTitles: Record<string, { title: string; subtitle?: string }> = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Resumen general del sistema' },
  '/empleados': { title: 'Gestión de Empleados', subtitle: 'Alta, baja y modificación de empleados' },
  '/horarios': { title: 'Horarios y Turnos', subtitle: 'Configuración de jornadas laborales' },
  '/fichadas': { title: 'Registro de Fichadas', subtitle: 'Control de entrada y salida' },
  '/novedades': { title: 'Novedades', subtitle: 'Gestión de novedades del período' },
  '/cierre': { title: 'Cierre Mensual', subtitle: 'Consolidación para el contador' },
  '/configuracion': { title: 'Configuración', subtitle: 'Ajustes del sistema' },
};

const roleLabels: Record<UserRole, string> = {
  admin: 'Admin',
  empleado: 'Empleado',
  contador: 'Contador',
};

export function Header() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const basePath = '/' + location.pathname.split('/')[1];
  const pageInfo = pageTitles[basePath] || { title: 'Controlia' };

  const today = new Date().toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="header-title">{pageInfo.title}</h1>
        {pageInfo.subtitle && <span className="header-subtitle">{pageInfo.subtitle}</span>}
      </div>

      <div className="header-right">
        <div className="header-date">
          <Calendar size={14} />
          <span>{today}</span>
        </div>

        <div className="header-role-badge">
          {roleLabels[user.rol]}
        </div>

        <button className="header-notifications" title="Notificaciones">
          <Bell size={20} />
          <span className="notif-dot" />
        </button>
      </div>
    </header>
  );
}
