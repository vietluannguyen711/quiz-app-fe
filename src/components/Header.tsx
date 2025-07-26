import { useNavigate } from "react-router-dom";
import { userApi } from "../api/userApi";
import { useAuth } from "../contexts/AuthContext";
import Logo from "./Logo";

export default function Header() {
 
  const navigate = useNavigate();
  const {user, setUser} = useAuth();
  const handleLogout = () => {
    userApi.logout().then((res) => {
      console.log(res);
      setUser(null);
      localStorage.removeItem("token");
      navigate("/login");
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className="flex items-center justify-around h-[84px]">
      <Logo />
      <nav className="w-[488px] h-[24px]">
        <ul className="text-gray-900 font-family-[Inter]   text-[16px] flex justify-between">
          <li className="font-medium">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Feature</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Testimonial</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </nav>
      <div className="authen text-sm flex gap-[14px]">
        {user ? (
          <div className="flex gap-4 items-center">
            <span>👋 Xin chào, <strong>{user.username}</strong></span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Thoát
            </button>
          </div>
        ) : (
          <a href="/login" className="text-blue-600 hover:underline">Đăng nhập</a>
        )}
      </div>
    </div>
  );
}
