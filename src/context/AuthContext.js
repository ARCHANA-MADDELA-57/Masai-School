import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuth: false, role: null, user: null });

    const login = (email, password) => {
        if (email === "admin@gmail.com" && password === "admin1234") {
            setAuth({ isAuth: true, role: "Admin", user: email });
            return { success: true, role: "Admin" };
        } else if (email === "customer@gmail.com" && password === "customer1234") {
            setAuth({ isAuth: true, role: "Customer", user: email });
            return { success: true, role: "Customer" };
        }
        return { success: false };
    };
    const logout = () => {
        setAuth({ isAuth: false, role: null, user: null });
        return (
            <AuthContext.Provider value={{ ...auth, login, logout }}>
                {children}
            </AuthContext.Provider>
        );
    };
};
export const useAuth = () => useContext(AuthContext);
