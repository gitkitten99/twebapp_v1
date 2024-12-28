import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthGuard } from './components/auth/AuthGuard';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthGuard>
        <App />
      </AuthGuard>
    </ThemeProvider>
  </StrictMode>
);