import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { AuthState } from '../types/auth';

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setAuthState({
        isAuthenticated: !!session,
        isLoading: false,
        error: null,
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (accessCode: string) => {
    try {
      // Using a default email with the access code as password
      const { data, error } = await supabase.auth.signInWithPassword({
        email: `${accessCode}@example.com`,
        password: accessCode,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      setAuthState(prev => ({ ...prev, error: 'Invalid access code' }));
      throw error;
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return {
    ...authState,
    signIn,
    signOut,
  };
}