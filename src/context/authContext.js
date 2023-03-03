import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [dataAuth, setDataAuth] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstTimeOnApp, setIsFirstTimeOnApp] = useState(false);

  const login = (userData) => {
    setDataAuth(userData);
  };

  const logout = () => {
    setDataAuth(undefined);
  };
  const getIsLoading = () => isLoading;
  const updateIsLoading = (value) => {
    setIsLoading(value);
  };

  const getIsFirstTimeOnApp = () => isFirstTimeOnApp;
  const updateIsFirstTimeOnApp = (value) => {
    setIsFirstTimeOnApp(value);
  };

  const valueContext = {
    dataAuth,
    login,
    logout,
    getIsLoading,
    updateIsLoading,
    getIsFirstTimeOnApp,
    updateIsFirstTimeOnApp,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
