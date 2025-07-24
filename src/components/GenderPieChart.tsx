// src/components/GenderPieChart.tsx
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip
} from "recharts";

const data = [
  { name: "Nam", value: 66 },
  { name: "Nữ", value: 34 }
];

const COLORS = ["#3b82f6", "#a78bfa"];

export default function GenderPieChart() {
  return (
    <div className="bg-white p-0 rounded-xl shadow">
      <h3 className="mb-4 p-4 font-semibold text-gray-700">Tỷ lệ giới tính</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
