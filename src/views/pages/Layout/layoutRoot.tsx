import { routes } from '@app/Router/routes';
import { Avatar, AvatarFallback, AvatarImage } from '@views/components/ui/avatar';

import { ChevronDown, ChevronLeft, ChevronRight, SunriseIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { ReactNode } from 'react';

export function LayoutRoot({ children }: { children: ReactNode }) {
  const location = useLocation()

  return (
    <section className="flex h-screen flex-col justify-between">
      <div className="sticky flex h-24 w-full gap-8 rounded-b-[20px] dark:bg-[#222225] p-6 shadow-lg">
        {location.pathname.includes(routes.calendar) !== true ? (
          <>
            <Avatar>
              <AvatarImage src="path/to/your/image.png" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>

            <div className="font-bold text-primary">
              <span className='flex gap-1'>
                <SunriseIcon width={21} />
                <p>Boa tarde, Renara!</p>
              </span>
              <p>Seguindo o plano por 10 dias</p>
            </div>
          </>
        ) : (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-6">
              <ChevronDown width={32} />
              <span className="font-bold text-primary">
                <p className="text-sm">2024</p>
                <p className="text-xl">Agosto</p>
              </span>
            </div>
            <span className="inline-flex gap-4">
              <ChevronLeft />
              <ChevronRight />
            </span>
          </div>
        )}
      </div>

      <div className="h-full ">{children}</div>
      {/* <Navigation>
        <NavigationList>
          <Link to={routes.home}>
            <NavigationTrigger value={routes.home}>
              <HomeIcon size={28} />
              <TabsContent value={routes.home}>Home</TabsContent>
            </NavigationTrigger>
          </Link>

          <Link to={routes.dashboard}>
            <NavigationTrigger value="task">
              <ListChecks size={26} />
              <TabsContent value="task">Tarefas</TabsContent>
            </NavigationTrigger>
          </Link>

          <Link to={routes.calendar}>
            <NavigationTrigger value="calendar">
              <CalendarDays size={26} />
              <TabsContent value="calendar">Calendário</TabsContent>
            </NavigationTrigger>
          </Link>

          <NavigationTrigger value="user">
            <UserRound size={26} />
            <TabsContent value="user">Perfil</TabsContent>
          </NavigationTrigger>
        </NavigationList>
      </Navigation> */}
    </section>
  );
}
