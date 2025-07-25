import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import QuizPage from "./pages/QuizPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="quiz" element={<QuizPage />} />
          
          
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
