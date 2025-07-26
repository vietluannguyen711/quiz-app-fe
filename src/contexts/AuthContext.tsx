import { createContext, useContext, useEffect, useState } from "react";
import type { UserHeaderDto } from "../types";
import { userApi } from "../api/userApi";


// Định nghĩa type cho context:
interface AuthContextType {
    user: UserHeaderDto | null;
    setUser: React.Dispatch<React.SetStateAction<UserHeaderDto | null>>;
    loading: boolean;
}
const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserHeaderDto | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await userApi.getCurrentUser();
                setUser(res);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);
    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}