import axios from "./axios";



export const subjectApi = {
    getAll: async () => {
        const response = await axios.get("/subjects");

        return response.data;
    },
   

}