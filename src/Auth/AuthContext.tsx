import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., check localStorage or session)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Add your login logic here
      // Example:
      // const response = await api.login(email, password);
      // const userData = response.data;
      
      const mockUserData = { id: 1, email: email }; // Replace with actual login
      setUser(mockUserData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUserData));
    } catch (error) {
      throw error;
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      // Add your signup logic here
      // Example:
      // const response = await api.signup(email, password);
      // const userData = response.data;
      
      const mockUserData = { id: 1, email: email }; // Replace with actual signup
      setUser(mockUserData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUserData));
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Add your logout logic here
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('user');
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
