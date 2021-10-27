import MainLayout from '../layouts/MainLayout';
import Tester from '../Tester';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Tester />
        },
    ]
};

export default MainRoutes;
