import { useEffect, useState } from "react";
import { subjectApi } from "../api/subjectApi";
import type { Chapter, Grade, Subject, Topic } from "../types";
import { gradeApi } from "../api/gradeApi";
import { chapterApi } from "../api/chapterApi";
import { topicApi } from "../api/topicApi";

export interface FilterType {
    subjectId: number | undefined;
    gradeId: number | undefined;
    chapterId: number | undefined;
    topicId: number | undefined;
    level: string;
    search: string;
}

export interface FilterProps {
    onChange: (key: keyof FilterType, value: string | number) => void;
}

export default function Filter({ onChange }: FilterProps) {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [grades, setGrades] = useState<Grade[]>([]);
    const [chapters, setChapters] = useState<Chapter[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const levels = ["Easy", "Medium", "Hard"];

    useEffect(() => {
        // fetch all subjects
        const fetchSubjects = async () => {
            const res = await subjectApi.getAll();
            setSubjects(res);
        }
        fetchSubjects();
        // fetch all grades
        const fetchGrades = async () => {
            const res = await gradeApi.getAll();
            setGrades(res);
        }
        fetchGrades();

        // fetch all chapters
        const fetchChapters = async () => {
            const res = await chapterApi.getAll();
            setChapters(res);
        }
        fetchChapters();
        // fetch all topics
        const fetchTopics = async () => {
            const res = await topicApi.getAll();
            setTopics(res);
        }
        fetchTopics();
    }, []);



    return (
        <div className="flex items-center justify-center gap-4 flex-wrap">
            <div>
                <h1>Subject</h1>
                <div >
                    <select className="w-[200px] border-2 border-gray-300 rounded-md p-4" onChange={(e) => onChange("subjectId", parseInt(e.target.value))}>
                        <option value="">Tất cả</option>
                        {subjects && subjects.map((subject) => (
                            <option key={subject.id} value={subject.id}>{subject.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <h1>Grade</h1>
                <div>
                    <select className="w-[200px] border-2 border-gray-300 rounded-md p-4" onChange={(e) => onChange("gradeId", parseInt(e.target.value))}>
                        <option value="">Tất cả</option>
                        {grades && grades.map((grade) => (
                            <option key={grade.id} value={grade.id}>{grade.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <h1>Chapter</h1>
                <div>
                    <select className="w-[200px] border-2 border-gray-300 rounded-md p-4" onChange={(e) => onChange("chapterId", parseInt(e.target.value))}>
                        <option value="">Tất cả</option>
                        {chapters && chapters.map((chapter) => (
                            <option key={chapter.id} value={chapter.id}>{chapter.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <h1>Topic</h1>
                <div>
                    <select className="w-[200px] border-2 border-gray-300 rounded-md p-4" onChange={(e) => onChange("topicId", parseInt(e.target.value))}>
                        <option value="">Tất cả</option>
                        {topics && topics.map((topic) => (
                            <option key={topic.id} value={topic.id}>{topic.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <h1>Level</h1>
                <div>
                    <select className="w-[200px] border-2 border-gray-300 rounded-md p-4" onChange={(e) => onChange("level", e.target.value)}>
                        <option value="">Tất cả</option>
                        {levels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <h1>Search</h1>
                <div>
                    <input className="w-[200px] border-2 border-gray-300 rounded-md p-4" onChange={(e) => onChange("search", e.target.value)} />
                </div>
            </div>
        </div>
    )
}