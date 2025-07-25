import { useNavigate } from "react-router-dom";

export default function Ads() {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src="learningtracking.png"
            alt="Quiz Illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ôn tập hiệu quả, theo dõi tiến độ học tập dễ dàng
          </h2>
          <p className="text-gray-600 mb-6">
            Nền tảng luyện thi giúp bạn tiếp cận hàng nghìn câu hỏi theo từng
            cấp độ, theo dõi kết quả chi tiết, xác định điểm yếu và cải thiện
            mỗi ngày.
          </p>
          <button onClick={() => navigate("/quiz")} className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md transition">
            Bắt đầu miễn phí
          </button>
        </div>
      </div>
    </section>
  );
}
