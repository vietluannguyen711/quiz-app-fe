import QuizItem from "./QuizItem"

// ✅ RecentQuizzes Component
function RecentQuizzes() {
  const quizzes = [
    {
      title: 'Đề thi Toán 12',
      statusIcon: '✅',
      statusText: '9/10',
      actionLabel: 'Xem kết quả',
    },
    {
      title: 'Đề Hóa lớp 11',
      statusIcon: '🕒',
      statusText: 'Chưa làm',
      actionLabel: 'Làm ngay',
    },
  ]
  return (
    <div>
      <h2 className="text-md font-semibold mb-2">🕒 Bài kiểm tra gần đây</h2>
      <div className="space-y-2">
        {quizzes.map((q, idx) => (
          <QuizItem key={idx} {...q} />
        ))}
      </div>
    </div>
  )
}
export default RecentQuizzes;