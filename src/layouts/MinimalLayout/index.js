import { Outlet } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
    return (
        <>
            <Outlet />
            <p>Minimal</p>
        </>
    );
};

export default MinimalLayout;
