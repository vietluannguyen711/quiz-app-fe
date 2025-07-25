// src/pages/QuizPage.tsx
import { useState } from "react";

const quizData = {
  title: "Bài kiểm tra lập trình Java",
  questions: [
    {
      id: 1,
      question: "Lớp trong Java được khai báo bằng từ khóa nào?",
      options: ["function", "def", "class", "method"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "Kết quả của 2 + 3 * 4 là bao nhiêu?",
      options: ["20", "14", "12", "24"],
      correctAnswer: 1,
    },
    // thêm câu hỏi khác
  ],
};

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    quizData.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">{quizData.title}</h1>

      {!submitted ? (
        <>
          <div className="border p-4 rounded shadow">
            <p className="mb-4 font-medium">{`Câu ${currentQuestionIndex + 1}: ${currentQuestion.question}`}</p>
            <ul className="space-y-2">
              {currentQuestion.options.map((option, idx) => (
                <li
                  key={idx}
                  className={`p-2 border rounded cursor-pointer ${
                    answers[currentQuestionIndex] === idx ? "bg-blue-100 border-blue-500" : ""
                  }`}
                  onClick={() => handleOptionClick(idx)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} disabled={currentQuestionIndex === 0} className="btn">
              Câu trước
            </button>
            {currentQuestionIndex < quizData.questions.length - 1 ? (
              <button onClick={handleNext} className="btn">
                Câu tiếp
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn bg-green-500 text-white">
                Nộp bài
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-600">Bạn đã hoàn thành bài!</h2>
          <p className="mt-2">Số điểm của bạn: {calculateScore()} / {quizData.questions.length}</p>
        </div>
      )}
    </div>
  );
}
