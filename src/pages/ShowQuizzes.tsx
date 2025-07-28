import { useEffect, useState } from "react";
import { type ShowQuizzesDto } from "../types";
import { useNavigate } from "react-router-dom";
import { quizApi } from "../api/quizApi";
import Pagination from "../components/Pagination";
import Filter, { type FilterType } from "../components/Filter";


export default function ShowQuizzes() {
    const [quizzes, setQuizzes] = useState<ShowQuizzesDto[] | null>([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(10);
    const [pageSize, setPageSize] = useState(5);
    const [filter, setFilter] = useState<FilterType>({
        subjectId: undefined,
        gradeId: undefined,
        chapterId: undefined,
        topicId: undefined,
        level: "",
        search: ""
    });

    const handleFilterChange = (key: keyof FilterType, value: string | number) => {
        setFilter({ ...filter, [key]: value });
        
    }
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    const handlePageSizeChange = (pageSize: number) => {
        console.log(pageSize);
        setPageSize(pageSize);
    }

    useEffect(() => {
        const fetchQuizzesWithFilter = async () => {
            const res = await quizApi.getAllWithFilter(currentPage, pageSize, filter.subjectId, filter.gradeId, filter.chapterId, filter.topicId, filter.level, filter.search);
            console.log(res);
            setQuizzes(res.content);
            setTotalPages(res.totalPages);
        }
        fetchQuizzesWithFilter();
    }, [])
    // phân trang

    // filter
    useEffect(() => {
        const fetchQuizzesWithFilter = async () => {
            const res = await quizApi.getAllWithFilter(currentPage, pageSize, filter.subjectId, filter.gradeId, filter.chapterId, filter.topicId, filter.level, filter.search);
            setQuizzes(res.content);
            setTotalPages(res.totalPages);
        }
        fetchQuizzesWithFilter();
    }, [currentPage, pageSize, filter])

    return (
        <>
            <Filter onChange={handleFilterChange}/>
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <h1 className="text-2xl font-bold">Quizzes</h1>
                {quizzes && quizzes.map((quiz, idx) => (
                    <div key={idx} className="w-full flex items-center justify-between">
                        <div className={`w-2/3 h-24 flex items-center justify-center border-2 border-gray-300 rounded-md ${quiz.isFreeTrial ? "bg-green-500" : "bg-gray-500"}`} onClick={() => {

                            navigate(`/quiz/${quiz.id}`);

                        }}>
                            <h1>{quiz.name}</h1>

                        </div>
                        <div className="flex w-1/3 items-center justify-center">
                            {quiz.isFreeTrial ? (<button>Bắt đầu làm</button>) : (<button>Đăng ký để truy cập tất cả đề</button>)}

                        </div>
                    </div>
                ))}
                

            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} onPageSizeChange={handlePageSizeChange} />
        </>
    );
}