// ✅ Greeting Component
function Greeting({ name, completed, total }: { name: string; completed: number; total: number }) {
  return (
    <div>
      <p className="text-lg font-semibold">👋 Xin chào, {name}!</p>
      <p className="text-sm text-gray-600">🎯 Bạn đã hoàn thành {completed}/{total} bài tuần này</p>
    </div>
  )
}
export default Greeting;