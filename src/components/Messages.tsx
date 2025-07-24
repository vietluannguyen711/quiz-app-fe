// src/components/Messages.tsx
const messages = [
  { name: "Hệ thống", content: "Bạn vừa hoàn thành bài thi Toán 11", date: "18/07/2025" },
  { name: "Giáo viên", content: "Bạn cần ôn lại phần hình học", date: "16/07/2025" },
];

export default function Messages() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="mb-4 font-semibold text-gray-700">Thông báo gần đây</h3>
      <ul className="space-y-4">
        {messages.map((msg, idx) => (
          <li key={idx}>
            <div className="text-sm font-medium text-gray-800">{msg.name}</div>
            <div className="text-gray-600 text-sm">{msg.content}</div>
            <div className="text-gray-400 text-xs">{msg.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
