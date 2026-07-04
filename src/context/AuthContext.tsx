import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { backend, type AuthUser, type SignInInput, type SignUpInput } from '../lib/backend';

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  signUp: (input: SignUpInput) => Promise<AuthUser>;
  signIn: (input: SignInInput) => Promise<AuthUser>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    backend.auth.getCurrentUser().then((u) => {
      if (active) {
        setUser(u);
        setLoading(false);
      }
    });
    const unsubscribe = backend.auth.onAuthStateChange((u) => setUser(u));
    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const value: AuthContextValue = {
    user,
    loading,
    signUp: async (input) => {
      const u = await backend.auth.signUp(input);
      setUser(u);
      return u;
    },
    signIn: async (input) => {
      const u = await backend.auth.signIn(input);
      setUser(u);
      return u;
    },
    signOut: async () => {
      await backend.auth.signOut();
      setUser(null);
    },
    resetPassword: (email) => backend.auth.resetPassword(email),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
