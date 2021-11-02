import React from "react";
import { useRoutes } from "react-router-dom";
import config from "../config";
import { AuthenticatedRoutes } from "./AuthenticatedRoutes";
import { AuthenticationRoutes } from "./AuthenticationRoutes";
import PublicRoutes from "./PublicRoutes";

const NotFound = () => "404 Not Found";

const notFoundRoutes = {
  path: "*",
  element: <NotFound />,
};

// ==============================|| ROUTING RENDER ||============================== //

export default function AppRoutes() {
  return useRoutes(
    [
      PublicRoutes,
      ...AuthenticationRoutes,
      ...AuthenticatedRoutes,
      notFoundRoutes,
    ],
    config.basename
  );
}
