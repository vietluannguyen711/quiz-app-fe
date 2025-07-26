import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function RequireRole({ roles }: { roles: string[] }) {
    // lấy thông tin user đã login
    const { user, loading } = useAuth();
    console.log(user);
    if (loading) {
        return <div>Loading...</div>
    }
    if (!user) {
        return <Navigate to="/login" replace />
    }
    if (!roles.includes(user.role)) {
        return <Navigate to="/" replace />
    }
    return (
        <Outlet />
    )
}