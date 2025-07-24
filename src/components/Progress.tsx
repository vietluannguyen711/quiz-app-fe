export default function Progress({
  percentage,
  className,
}: {
  percentage: number;
  className: string;
}) {
  return (
    <div className="w-[250px] m-auto space-y-4 shadow-lg rounded-lg p-4 bg-orange-50">
      <div
        className="flex w-full h-5 text-sm text-center bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
        role="progressbar"
        aria-valuenow={100}
        aria-valuetext={`${percentage}% completed`}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={`${className}`} style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}

