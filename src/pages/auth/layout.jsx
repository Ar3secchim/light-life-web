import { TabsContent } from '@radix-ui/react-tabs';
import {
  BotIcon,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  ListCheck,
  UserRound,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/avatar';
import {
  Navigation,
  NavigationList,
  NavigationTrigger,
} from '../../components/navigation';

function LayoutRoot({ children }) {
  const router = useRouter();

  return (
    <section className='flex h-screen flex-col justify-between'>
      <div className='sticky flex h-24 w-full gap-8 rounded-b-[20px] bg-[#00bb1009] p-6 shadow-lg'>
        {router.pathname.includes('/auth/calendar') != true ? (
          <>
            <Avatar>
              <AvatarImage src={<BotIcon />} />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>

            <div className='font-bold text-primary'>
              <p>Boa tarde, Renara!</p>
              <p>Seguindo o plano por 10 dias</p>
            </div>
          </>
        ) : (
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-6'>
              <ChevronDown width={32} />
              <span className='font-bold text-primary'>
                <p className='text-sm'>2024</p>
                <p className='text-xl'>Agosto</p>
              </span>
            </div>
            <span className='inline-flex gap-4'>
              <ChevronLeft />
              <ChevronRight />
            </span>
          </div>
        )}
      </div>

      <div className='h-full'>{children}</div>
      <Navigation>
        <NavigationList>
          <Link href='/auth/home'>
            <NavigationTrigger value='/auth/home'>
              <HomeIcon size={28} />
              <TabsContent value='/auth/home'>Home</TabsContent>
            </NavigationTrigger>
          </Link>

          <Link href='/auth/dashboardTask'>
            <NavigationTrigger value='task'>
              <ListCheck size={26} />
              <TabsContent value='task'>Tarefas</TabsContent>
            </NavigationTrigger>
          </Link>

          <Link href='/auth/calendar'>
            <NavigationTrigger value='calendar'>
              <CalendarDays size={26} />
              <TabsContent value='calendar'>Calendário</TabsContent>
            </NavigationTrigger>
          </Link>

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
