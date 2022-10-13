import Auth from 'middlewares/auth';
import Register from 'pages/register';
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import {
  HOME, LOGIN, REGISTER, ROOMS,
} from './paths';

// ** Components
const Error = lazy(() => import('../pages/error'));
const Login = lazy(() => import('../pages/login'));
const Home = lazy(() => import('../pages/home'));
const Room = lazy(() => import('../pages/room'));

const Router = () => {
  const routes = useRoutes([
    {
      path: HOME,
      element: <Home />,
    },
    {
      path: LOGIN,
      element: <Login />,
    },
    {
      path: REGISTER,
      element: <Register />,
    },
    {
      path: `${ROOMS}/:roomId`,
      element: (
        <Auth>
          <Room />
        </Auth>
      ),
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return routes;
};

export default Router;
