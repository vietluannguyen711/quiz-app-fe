import axios from "./axios";

export type LoginRequest = {
    email: string;
    password: string;
    remember_me: boolean;
}

export type RegisterRequest = {
    name: string;
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const authApi = {
    login: async (data: LoginRequest) => {
        const response = await axios.post("/auth/login", data);
        const token = response.data.token;
        
        localStorage.setItem("token", token);
        return token;
    },
    register: async (data: RegisterRequest) => {
        const response = await axios.post("/auth/register", data);
        return response.data;
    },
}