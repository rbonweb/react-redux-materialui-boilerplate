import React from 'react';
import { lazy } from 'react';
import MinimalLayout from '../layouts/MinimalLayout';
import Loadable from '../components/common/Loadable';

const SignIn = Loadable(lazy(() => import('../components/SingIn')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/signin',
            element: <SignIn />
        },
    ]
};

export default AuthenticationRoutes;
