// ✅ ProgressBar Component
function ProgressBar({ label, percentage }: { label: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div className="h-3 rounded-full bg-blue-500" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}
export default ProgressBar;