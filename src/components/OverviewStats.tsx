interface Props {
  title: string;
  value: string;
  growth: string;
  positive?: boolean;
}

export default function OverviewStats({ title, value, growth, positive = true }: Props) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <div className="text-2xl font-bold">{value}</div>
      <div className={`text-sm ${positive ? "text-green-500" : "text-red-500"}`}>
        {positive ? "▲" : "▼"} {growth}
      </div>
    </div>
  );
}
