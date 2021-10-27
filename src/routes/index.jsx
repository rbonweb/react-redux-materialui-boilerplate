import React from "react";
import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import config from "../config";
import { useContext } from "react";
import { authContext } from "../hooks/authContext";

// ==============================|| ROUTING RENDER ||============================== //

const NotFound = () => "404 Not Found";

const notFoundRoutes = {
  path: "*",
  element: <NotFound />,
};

export default function ThemeRoutes() {
  const auth = useContext(authContext);
  if (auth.authenticated) {
    return useRoutes(
      [MainRoutes, AuthenticationRoutes, AuthenticatedRoutes, notFoundRoutes],
      config.basename
    );
  }
  return useRoutes(
    [MainRoutes, AuthenticationRoutes, notFoundRoutes],
    config.basename
  );
}