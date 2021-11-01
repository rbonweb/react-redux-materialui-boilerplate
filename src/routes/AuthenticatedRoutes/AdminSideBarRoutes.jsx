import React, { lazy } from "react";
import Loadable from "../../components/Loadable";
import AdminLayout from "../../layouts/AdminLayout";
import Blogs from "../../views/admin/Blogs";

const Dashboard = Loadable(lazy(() => import("../../views/admin/Dashboard")));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AdminSideBarRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "/admin/dashboard",
      element: <Dashboard />,
      name: "Dashboard",
    },
    {
      path: "/admin/blogs",
      name: "Blogs",
      children: [
        {
          path: "/admin/blogs",
          element: <Blogs />,
          name: "All Blogs",
        },
        {
          path: "/admin/blogs/add",
          element: <Blogs />,
          name: "Add New",
        },
      ],
    },
  ],
};

export default AdminSideBarRoutes;
