// ** Router imports
import { lazy } from 'react';

// ** Router imports
import { useRoutes } from 'react-router-dom';

// ** Components
const Error = lazy(() => import('../pages/error'));

const Home = lazy(() => import('../pages/home'));
const Room = lazy(() => import('../pages/room'));

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Home />,
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
