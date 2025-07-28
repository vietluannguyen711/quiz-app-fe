import axiosInstance from "./axios"

export const topicApi = {
    getAll: async () => {
        const response = await axiosInstance.get("/topics");
        return response.data;
    }
}