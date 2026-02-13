import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
    const { isAuth, role: userRole } = useAuth();

    if (!isAuth) return <Navigate to="/" />;
    if (role && userRole !== role) return <Navigate to="/" />;

    return children;
};

export default ProtectedRoute;