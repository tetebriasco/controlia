import { createContext, useContext, useState, type ReactNode } from 'react';
import type { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers: Record<UserRole, User> = {
  admin: {
    id: 1,
    nombre: 'Administrador',
    rol: 'admin',
  },
  empleado: {
    id: 2,
    nombre: 'María Gómez',
    rol: 'empleado',
  },
  contador: {
    id: 3,
    nombre: 'Cr. Daniel Méndez',
    rol: 'contador',
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('controlia_auth_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (role: UserRole) => {
    const u = mockUsers[role];
    setUser(u);
    localStorage.setItem('controlia_auth_user', JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('controlia_auth_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
