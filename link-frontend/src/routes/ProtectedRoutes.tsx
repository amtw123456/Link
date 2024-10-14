import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const ProtectedRoutes = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;