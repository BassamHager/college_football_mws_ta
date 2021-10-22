import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  // auth to login: to toggle routing between homepage & loginPage
  const [isAuthorized, setIsAuthorized] = useState(false);

  // password status: to show alert when entering wrong code
  const [isWrongPW, setIsWrongPW] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isAuthorized, setIsAuthorized, isWrongPW, setIsWrongPW }}
    >
      {children}
    </AuthContext.Provider>
  );
};
