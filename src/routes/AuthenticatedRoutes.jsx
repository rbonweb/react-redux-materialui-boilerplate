import React, { lazy } from "react";
import Loadable from "../components/Loadable";
import AdminLayout from "../layouts/AdminLayout";

const Dashboard = Loadable(lazy(() => import("../views/admin/Dashboard")));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticatedRoutes = {
  path: "/",
  element: <AdminLayout />,
  children: [
    {
      path: "/admin/dashboard",
      element: <Dashboard />,
    },
  ],
};

export default AuthenticatedRoutes;
