import React from "react";
import { lazy } from "react";
import Loadable from "../../../components/Loadable";
import MinimalLayout from "../../../layouts/MinimalLayout";

const SignIn = Loadable(
  lazy(() => import("../../../views/authentication/SignIn"))
);

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AdminAuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/signin",
      element: <SignIn />,
    },
  ],
};

export default AdminAuthenticationRoutes;
