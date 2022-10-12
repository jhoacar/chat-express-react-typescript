// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes } from 'react-router-dom'

// ** Components
const Error = lazy(() => import('../views/pages/error'))

const Home = lazy(() => import('../views/pages/home'))
const Room = lazy(() => import('../views/pages/room'))

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
    ])

    return routes
}

export default Router
