import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function UserLayout() {
  return (
    <div className="min-h-screen  flex flex-col w-[1440px] mx-auto">
      {/* Header */}
      <Header />
      
      {/* Nội dung chính */}
      <main className="flex-1 px-6 py-6 w-[960px] mx-auto ">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t text-center py-4 text-sm text-gray-500">
        © 2025 Learning System. All rights reserved.
      </footer>
    </div>
  );
}
