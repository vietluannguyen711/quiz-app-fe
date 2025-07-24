// src/components/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-screen p-6 space-y-8">
      <h2 className="text-xl font-bold text-blue-600">🧠 Trắc Nghiệm</h2>
      <nav className="space-y-4">
        <a href="#" className="block text-blue-600 font-semibold">Tổng quan</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Bài học</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Bài kiểm tra</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Tiến độ</a>
        <a href="#" className="block text-gray-600 hover:text-blue-600">Cài đặt</a>
      </nav>
    </aside>
  );
}
