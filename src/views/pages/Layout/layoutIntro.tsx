import { routes } from '@app/Router/routes';
import { Button } from '@views/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';

import { Link, useNavigate } from 'react-router-dom';

export function LayoutRootIntro({ children }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const navigate = useNavigate();

  return (
    <section className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(119, 198, 181, 0.541),rgba(255,255,255,0))] absolute top-0 z-[-2] h-screen w-screen bg-white">
      <svg className="-z-10 absolute top-0 -left-1" width="200" height="150" viewBox="0 0 184 123" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M93 22.7644C93 77.9928 48.2285 122.764 -7 122.764C-62.2285 122.764 -107 77.9928 -107 22.7644C-107 -32.4641 -62.2285 -77.2356 -7 -77.2356C48.2285 -77.2356 93 -32.4641 93 22.7644Z" fill="#34786A" fill-opacity="0.5" />
        <path d="M184 -22C184 33.2285 139.228 78 84 78C28.7715 78 -16 33.2285 -16 -22C-16 -77.2285 28.7715 -122 84 -122C139.228 -122 184 -77.2285 184 -22Z" fill="#34786A" fill-opacity="0.5" />
      </svg>

      <div className="mx-6 flex h-screen flex-col pt-4">
        <div className="flex items-center justify-between">
          <Button size="icon" className='bg-transparent text-primary hover:bg-transparent' onClick={() => navigate(-1)}>
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
