import React from 'react';
import MinimalLayout from '../layouts/MinimalLayout';
import Tester from '../Tester';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticatedRoutes = {
    path: '/admin',
    element: <MinimalLayout />,
    children: [
        {
            path: '/admin/dashboard',
            element: <Tester />
        },
    ]
};

export default AuthenticatedRoutes;
