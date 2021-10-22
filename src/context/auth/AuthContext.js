import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};
