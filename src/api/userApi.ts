import axiosInstance from "./axios";
import axios from "axios";



export const userApi = {
    getCurrentUser: async () => {
        try {
            
            const response = await axiosInstance.get("/users/me", { withCredentials: true });

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                return null;
            }
            throw error;
        }


    },
    logout: async () => {
        const response = await axiosInstance.post("/logout", { withCredentials: true });
        return response.data;
    }

}