import { useAuth } from '../../context/AuthContext';
import { AdminDashboard } from './AdminDashboard';
import { EmpleadoDashboard } from './EmpleadoDashboard';
import { ContadorDashboard } from './ContadorDashboard';
import './DashboardPage.css';

export function DashboardPage() {
  const { user } = useAuth();

  if (!user) return null;

  switch (user.rol) {
    case 'admin':
      return <AdminDashboard />;
    case 'empleado':
      return <EmpleadoDashboard />;
    case 'contador':
      return <ContadorDashboard />;
    default:
      return null;
  }
}
