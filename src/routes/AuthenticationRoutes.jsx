import React from "react";
import { lazy } from "react";
import MinimalLayout from "../layouts/MinimalLayout";
import Loadable from "../components/Loadable";

const SignIn = Loadable(lazy(() => import("../views/authentication/SignIn")));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/signin",
      element: <SignIn />,
    },
  ],
};

export default AuthenticationRoutes;
