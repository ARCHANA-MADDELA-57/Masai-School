import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const login = (email, password) => {
    // Credentials as per requirements
    if (email === "admin@gmail.com" && password === "admin1234") {
      setIsAuth(true);
      setUserRole("Admin");
      return { success: true, role: "Admin" };
    } else if (email === "customer@gmail.com" && password === "customer1234") {
      setIsAuth(true);
      setUserRole("Customer");
      return { success: true, role: "Customer" };
    }
    return { success: false };
  };

  const logout = () => {
    setIsAuth(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
