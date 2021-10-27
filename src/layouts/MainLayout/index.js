import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Outlet />
            <p>Main</p>
        </>
    );
};

export default MainLayout;
