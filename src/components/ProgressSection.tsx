import ProgressBar from "./ProgressBar";

// ✅ ProgressSection Component
function ProgressSection({ subjects }: { subjects: { label: string; percentage: number }[] }) {
  return (
    <div className="space-y-2">
      {subjects.map((subj, idx) => (
        <ProgressBar key={idx} label={subj.label} percentage={subj.percentage} />
      ))}
    </div>
  )
}
export default ProgressSection;