import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
