// ✅ QuizItem Component
function QuizItem({
  title,
  statusIcon,
  statusText,
  actionLabel,
}: {
  title: string
  statusIcon: string
  statusText: string
  actionLabel: string
}) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <span>{statusIcon}</span>
          <span>{statusText}</span>
        </p>
      </div>
      <button className="text-sm text-blue-600 hover:underline whitespace-nowrap">
        {actionLabel} →
      </button>
    </div>
  )
}
export default QuizItem;