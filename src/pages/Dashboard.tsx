// src/pages/DashboardPage.tsx
import Sidebar from "../components/Sidebar";
import OverviewStats from "../components/OverviewStats";
import ActivityChart from "../components/ActivityChart";
import GenderPieChart from "../components/GenderPieChart";
import Messages from "../components/Messages";

export default function DashboardPage() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <OverviewStats title="Bài thi đã làm" value="28" growth="12%" positive />
          <OverviewStats title="Điểm trung bình" value="8.2" growth="0.3%" positive />
          <OverviewStats title="Số giờ học" value="14h" growth="8%" positive />
          <OverviewStats title="Mức độ tiến bộ" value="+15%" growth="15%" positive />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <ActivityChart />
          </div>
          <div>
            <GenderPieChart />
          </div>
        </div>

        <Messages />
      </main>
    </div>
  );
}
