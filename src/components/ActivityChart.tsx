// src/components/ActivityChart.tsx
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", tests: 3 },
  { name: "Feb", tests: 5 },
  { name: "Mar", tests: 2 },
  { name: "Apr", tests: 6 },
  { name: "May", tests: 7 },
  { name: "Jun", tests: 4 },
];

export default function ActivityChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="mb-4 font-semibold text-gray-700">Số bài làm theo tháng</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="tests" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
