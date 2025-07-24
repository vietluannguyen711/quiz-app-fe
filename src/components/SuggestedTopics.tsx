// ✅ SuggestedTopics Component
function SuggestedTopics({ topics }: { topics: string[] }) {
  return (
    <div>
      <h2 className="text-md font-semibold mb-2">📌 Gợi ý học tập</h2>
      <ul className="list-disc pl-5 space-y-1">
        {topics.map((topic, idx) => (
          <li key={idx} className="text-sm">
            {topic} – <a className="text-blue-600 underline cursor-pointer">Luyện ngay</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SuggestedTopics
