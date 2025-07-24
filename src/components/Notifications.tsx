// ✅ Notifications Component
function Notifications({ messages }: { messages: string[] }) {
  if (messages.length === 0) return null
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 p-4 space-y-1">
      {messages.map((msg, idx) => (
        <p key={idx}>{msg}</p>
      ))}
    </div>
  )
}
export default Notifications;