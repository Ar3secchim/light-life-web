import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import { lazyLoad } from '@app/utils/lazyLoad';
import { routes } from "./routes";

const { App } = lazyLoad(() => import('../../App'));
const { Register } = lazyLoad(() => import('@views/pages/register'));
const { Login } = lazyLoad(() => import('@views/pages/login'));

export function Router() {
  return (
    <Suspense fallback={<div className="w-10 h-10 rounded-full border-4 border-r-white animate-spin" />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
      </Routes>
    </Suspense>
  );
}
