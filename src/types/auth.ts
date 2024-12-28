export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AccessCodeFormData {
  accessCode: string;
}