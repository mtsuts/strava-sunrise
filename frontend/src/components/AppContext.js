import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([])

  const login = () => {
    setIsLoggedIn(true)
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, isLoading, data, login, logout, setIsLoading, setData }}>
      {children}
    </AppContext.Provider>
  );
};