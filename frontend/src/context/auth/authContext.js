import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  // password status: to show alert when entering wrong code
  const [isWrongPW, setIsWrongPW] = useState(false);

  return (
    <AuthContext.Provider value={{ isWrongPW, setIsWrongPW }}>
      {children}
    </AuthContext.Provider>
  );
};
