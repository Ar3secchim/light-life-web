import { routes } from '@app/Router/routes';
import { Button } from '@views/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';

import { Link } from 'react-router-dom';

export function LayoutRootIntro({ children }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

  return (
    <section className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(119, 198, 181, 0.541),rgba(255,255,255,0))] absolute top-0 z-[-2] h-screen w-screen bg-white">
      <div className="mx-6 flex h-screen flex-col pt-4">
        <div className="flex items-center justify-between">
          <Button size="icon" className='bg-transparent text-primary'>
            <ArrowLeftCircle />
          </Button>

          <Button size="sm" className="font-display px-0 text-primary bg-transparent">
            <Link to={routes.login}>Pular</Link>
          </Button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-7">
          {children}
        </div>
      </div>
    </section >
  );
}
