import { lazyLoad } from '@app/utils/lazyLoad';
import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { routes } from './routes';

const { Login } = lazyLoad(() => import('@views/pages/login'))
const { Home } = lazyLoad(() => import('@views/pages/home'))
const { Register } = lazyLoad(() => import('@views/pages/register'))

const { Intro } = lazyLoad(() => import('@views/pages/intro'));
const { IntroOne } = lazyLoad(() => import('@views/pages/intro/pageOne'))
const { IntroTwo } = lazyLoad(() => import('@views/pages/intro/pageTwo'))

const { CalendarPage } = lazyLoad(() => import('@views/pages/auth/calendar'))
const { DashboardTask } = lazyLoad(() => import('@views/pages/auth/dashboardTask'))
const { HomeTaks } = lazyLoad(() => import('@views/pages/auth/home'))

export function Router() {
  return (
    <Suspense fallback={<div className="w-10 h-10 rounded-full border-4 border-r-white animate-spin" />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.singup} element={<Register />} />

        <Route path={routes.intro} element={<Intro />} />
        <Route path={routes.introOne} element={<IntroOne />} />
        <Route path={routes.introTwo} element={<IntroTwo />} />

        <Route path={routes.dashboard} element={<DashboardTask />} />
        <Route path={routes.calendar} element={<CalendarPage />} />
        <Route path={routes.home} element={<HomeTaks />} />
      </Routes>
    </Suspense>
  );
}
