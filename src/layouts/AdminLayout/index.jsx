import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Outlet />
      <p>Admin Layout</p>
    </>
  );
};

export default AdminLayout;
