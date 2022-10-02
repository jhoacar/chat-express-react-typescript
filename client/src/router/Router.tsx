// ** Router imports
import { lazy } from 'react';

// ** Router imports
import { useRoutes } from 'react-router-dom';

// ** Components
const Error = lazy(() => import('../views/pages/error'));

const NotAuthorized = lazy(() => import('../views/pages/guest'));

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <NotAuthorized />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return routes;
};

export default Router;
