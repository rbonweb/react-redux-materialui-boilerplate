import React, { lazy } from "react";
import Loadable from "../../../components/Loadable";
import RequireAuth from "../../../components/auth/RequireAuth";
import AdminLayout from "../../../layouts/AdminLayout";
import Blogs from "../../../views/admin/Blogs";

const Dashboard = Loadable(
  lazy(() => import("../../../views/admin/Dashboard"))
);

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const ExtraRoutes = {
  path: "/as",
  element: <AdminLayout />,
  children: [
    {
      path: "/as/admin/dashboard",
      element: <RequireAuth component={<Dashboard />} />,
    },
    {
      path: "/as/admin/blogs",
      element: <Blogs />,
    },
  ],
};

export default ExtraRoutes;
