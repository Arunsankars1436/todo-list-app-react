import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login/index'));
const Dashboard = lazy(() => import('../pages/Dashboard/index'));
import type { RoutesArray } from '../types/RouteTypes';
import Loader from '../components/Loader';

const routes: RoutesArray[] = [
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes?.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
