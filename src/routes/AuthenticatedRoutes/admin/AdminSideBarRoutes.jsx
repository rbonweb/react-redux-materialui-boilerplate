import React, { lazy } from "react";
import Loadable from "../../../components/Loadable";
import RequireAuth from "../../../components/auth/RequireAuth";

const AdminLayout = Loadable(
  lazy(() => import("../../../layouts/AdminLayout"))
);
const Dashboard = Loadable(
  lazy(() => import("../../../views/admin/Dashboard"))
);
const Blogs = Loadable(lazy(() => import("../../../views/admin/Blogs")));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AdminSideBarRoutes = {
  path: "/admin",
  element: <RequireAuth component={<AdminLayout />} />,
  children: [
    {
      path: "/admin/dashboard",
      element: <RequireAuth component={<Dashboard />} />,
      name: "Dashboard",
    },
    {
      path: "/admin/blogs",
      name: "Blogs",
      children: [
        {
          path: "/admin/blogs",
          element: <RequireAuth component={<Blogs />} />,
          name: "All Blogs",
        },
        {
          path: "/admin/blogs/add",
          element: <RequireAuth component={<Blogs />} />,
          name: "Add New",
        },
      ],
    },
  ],
};

export default AdminSideBarRoutes;
