export default function Blog() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Góc học tập</h2>
        <p className="text-gray-600 mb-10">
          Những bài viết giúp bạn luyện thi hiệu quả hơn mỗi ngày. Kinh nghiệm,
          chiến lược và phân tích chuyên sâu từ đội ngũ giáo viên.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: "anh3.png",
              title: "7 mẹo làm bài trắc nghiệm nhanh và chính xác",
            },
            {
              img: "math trend.png",
              title: "Phân tích xu hướng đề thi Toán THPT 2025",
            },
            {
              img: "quizgame.png",
              title: "Ôn thi không nhàm chán với Quiz Game",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 shadow rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <a
                  href="#"
                  className="text-green-500 font-medium hover:underline"
                >
                  Xem thêm →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
