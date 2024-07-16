import { CalendarDays, HomeIcon, ListCheck, UserRound } from 'lucide-react';
import {
  Navigation,
  NavigationList,
  NavigationTrigger,
} from '../../components/navigation';
import { TabsContent } from '@radix-ui/react-tabs';
import Link from 'next/link';

function LayoutRoot({ children }) {
  return (
    <section className='flex h-screen flex-col justify-between'>
      <div className='bg-bg-green-850 sticky h-24 w-full rounded-b-[20px] p-6 shadow-lg'>
        NavBar
      </div>

      <div className='h-full'>{children}</div>

      <Navigation defaultValue='home'>
        <NavigationList>
          <Link href='/home'>
            <NavigationTrigger value='home'>
              <HomeIcon size={26} />
              <TabsContent value='home'>Home</TabsContent>
            </NavigationTrigger>
          </Link>

          <Link href='/home/dashboardTask'>
            <NavigationTrigger value='task'>
              <ListCheck size={26} />
              <TabsContent value='task'>Tarefas</TabsContent>
            </NavigationTrigger>
          </Link>

          <NavigationTrigger value='calendar'>
            <CalendarDays size={26} />
            <TabsContent value='calendar'>Calendário</TabsContent>
          </NavigationTrigger>

          <NavigationTrigger value='user'>
            <UserRound size={26} />
            <TabsContent value='user'>Perfil</TabsContent>
          </NavigationTrigger>
        </NavigationList>
      </Navigation>
    </section>
  );
}

export default LayoutRoot;
