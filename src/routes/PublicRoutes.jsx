import React, { lazy } from "react";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/MainLayout";

const Welcome = Loadable(lazy(() => import("../views/Welcome")));

// ==============================|| MAIN ROUTING ||============================== //

const PublicRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Welcome />,
    },
  ],
};

export default PublicRoutes;
