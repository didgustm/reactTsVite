import { lazy, memo } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@comp/template/Layout';

const Main = lazy(() => import('@page/Main'));
const Hooks = lazy(() => import('@page/Hooks'));
const Setup = lazy(() => import('@page/Setup'));
const Router = lazy(() => import('@page/Router'));
const ReadData = lazy(() => import('@page/ReadData'));
const Signup = lazy(() => import('@page/Signup'));
const Redux = lazy(() => import('@page/Redux'));

const MemoLayout = memo(Layout);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MemoLayout />,
        children: [
            {
                path: '',
                element: <Main />,
            },
            {
                path: '/hooks',
                element: <Hooks />,
            },
            {
                path: '/setup',
                element: <Setup />,
            },
            {
                path: '/router',
                element: <Router />,
            },
            {
                path: '/read',
                element: <ReadData />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/redux',
                element: <Redux />,
            },
        ],
    },
]);
