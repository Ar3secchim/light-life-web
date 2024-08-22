import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import Home from '@views/pages/home';
import { Intro } from '@views/pages/intro';
import { IntroOne } from '@views/pages/intro/pageOne';
import { IntroTwo } from '@views/pages/intro/pageTwo';
import { Login } from '@views/pages/login';
import { Register } from '@views/pages/register';
import { routes } from "./routes";

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
      </Routes>
    </Suspense>
  );
}
