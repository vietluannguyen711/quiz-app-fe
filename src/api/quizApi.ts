import axios from "./axios";


export const quizApi = {
    getAll: async () => {
        const response = await axios.get("/quizzes/all");

        return response.data;
    },
    getAllWithPagination: async (page: number, size: number) => {
        const response = await axios.get(`/quizzes?page=${page}&size=${size}`);
        return response.data;
    },
    getAllWithFilter: async (page: number, size: number, subjectId?: number, gradeId?: number, chapterId?: number, topicId?: number, level?: string, search?: string) => {
        // Tạo params object mới mỗi lần gọi, chỉ truyền trường có giá trị
        const params: Record<string, any> = {
            page,
            size,
            ...(typeof subjectId === "number" && !isNaN(subjectId) && { subjectId }),
            ...(typeof gradeId === "number" && !isNaN(gradeId) && { gradeId }),
            ...(typeof chapterId === "number" && !isNaN(chapterId) && { chapterId }),
            ...(typeof topicId === "number" && !isNaN(topicId) && { topicId }),
            ...(level && level !== "" && { level }),
            ...(search && search !== "" && { search }),
        };
        const response = await axios.get("/quizzes/filter", { params });
        return response.data;
    }
}

