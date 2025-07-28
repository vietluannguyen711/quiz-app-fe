import axiosInstance from "./axios"

export const chapterApi = {
    getAll: async () => {
        const response = await axiosInstance.get("/chapters/all");
        return response.data;
    }
}