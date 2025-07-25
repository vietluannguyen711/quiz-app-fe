import axios from "./axios";

export type LoginRequest = {
    email: string;
    password: string;
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
        return response.data;
    },
    register: async (data: RegisterRequest) => {
        const response = await axios.post("/auth/register", data);
        return response.data;
    },
}