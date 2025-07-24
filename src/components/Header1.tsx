import { Link, useLocation } from "react-router-dom";
const navLinks = [
  { to: "/dashboard", label: "Trang chủ" },
  { to: "/courses", label: "Khóa học" },
  { to: "/quizzes", label: "Bài kiểm tra" },
  { to: "/profile", label: "Hồ sơ" },
];

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">
        🧠 Learning System
      </h1>
      <nav className="flex space-x-4">
        {navLinks.map((link) => {
          const isActive = currentPath.startsWith(link.to);
          const baseClass =
            "text-sm font-medium transition-colors hover:text-blue-600";
          const activeClass = isActive ? " text-blue-600" : " text-gray-600";

          return (
            <Link
              key={link.to}
              to={link.to}
              className={baseClass + activeClass}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
export default Header;
