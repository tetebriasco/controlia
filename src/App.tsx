import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AppLayout } from './components/layout/AppLayout';
import { LoginPage } from './pages/auth/LoginPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { EmpleadosPage } from './pages/empleados/EmpleadosPage';
import { HorariosPage } from './pages/horarios/HorariosPage';
import { FichadasPage } from './pages/fichadas/FichadasPage';
import { NovedadesPage } from './pages/novedades/NovedadesPage';
import { CierrePage } from './pages/cierre/CierrePage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="empleados" element={<EmpleadosPage />} />
            <Route path="empleados/nuevo" element={<EmpleadosPage />} />
            <Route path="empleados/:id" element={<EmpleadosPage />} />
            <Route path="horarios" element={<HorariosPage />} />
            <Route path="fichadas" element={<FichadasPage />} />
            <Route path="novedades" element={<NovedadesPage />} />
            <Route path="cierre" element={<CierrePage />} />
            <Route path="configuracion" element={
              <div className="animate-fade-in">
                <div className="card">
                  <div className="card-header"><h3 className="card-title">Configuración</h3></div>
                  <div className="card-body">
                    <div className="empty-state">
                      <div className="empty-state-title">Próximamente</div>
                      <div className="empty-state-text">La sección de configuración estará disponible en la próxima versión.</div>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
