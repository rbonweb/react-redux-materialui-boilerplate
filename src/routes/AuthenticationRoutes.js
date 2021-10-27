import MinimalLayout from '../layouts/MinimalLayout';
import Tester from '../Tester';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <Tester />
        },
    ]
};

export default AuthenticationRoutes;
