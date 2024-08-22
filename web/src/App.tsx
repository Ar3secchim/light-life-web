import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { Router } from '@app/Router';
import { ThemeSwitcher } from '@views/components/ThemeSwitcher';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <BrowserRouter>
        <ThemeSwitcher />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

