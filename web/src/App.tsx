import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { Router } from '@app/Router';

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

