import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/authContext";
import { PropTypes } from "prop-types";

const RequireAuth = ({ component }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.authenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return component;
};

RequireAuth.propTypes = {
  component: PropTypes.object,
};

export default RequireAuth;
