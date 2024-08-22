import { BrowserRouter, Link } from 'react-router-dom';

import { ThemeProvider } from '@app/contexts/ThemeContext';
import { routes } from '@app/Router/routes';
import { ThemeSwitcher } from '@views/components/ThemeSwitcher';
import { Button } from '@views/components/ui/button';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <BrowserRouter>
        <ThemeSwitcher />
        <section className="mx-6 flex h-screen flex-col items-center justify-center gap-7">
          <h1 className="text-center text-2xl font-extrabold">
            Conquiste seus objetivos com
            <span className="text-primary"> Ligth Life</span>
          </h1>

    <div className="text-md text-secondary-dark-500 text-center font-semibold">
      <p>Você é o que você faz consistentemente.</p>
      <p>
        Quando ciência, comportamento e tecnolofia se encontram, nasce a
        ferramente de gestão para te ajudar no processo de voar alto e leve!
      </p>
    </div>

    <Button asChild size="lg" className="w-full">
      <Link to="/login">Começar uma nova jornada</Link>
    </Button>

    <Button
      asChild
      variant="outline"
      className="w-full border-primary text-primary"
    >
      <Link to={routes.login}> Já tenho um conta</Link>
    </Button>
      </section>
      </BrowserRouter>
    </ThemeProvider>
  )
}

