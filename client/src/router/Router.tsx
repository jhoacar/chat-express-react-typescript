import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// ** Components
const Error = lazy(() => import('../pages/error'));
const Login = lazy(() => import('../pages/login'));
const Home = lazy(() => import('../pages/home'));
const Room = lazy(() => import('../pages/room'));

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'rooms/:roomId',
      element: <Room />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return routes;
};

export default Router;
