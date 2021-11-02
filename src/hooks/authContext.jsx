import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

export const authContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <authContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export function useAuth() {
  return useContext(authContext);
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
