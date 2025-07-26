import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import QuizPage from "./pages/QuizPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import RequireRole from "./routes/RequireAdmin";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
// import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="quiz" element={<QuizPage />} />


          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="/admin" element={<RequireRole roles={["ROLE_ADMIN"]} />} >
            <Route index element={<AdminDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
