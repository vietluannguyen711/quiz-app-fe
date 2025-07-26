import axiosInstance from "./axios"

export const gradeApi = {
    getAllGrades: async () => {
        const response = await axiosInstance.get("/grades");
        return response.data;
    }
}