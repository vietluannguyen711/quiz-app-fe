export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            Bài học và kinh nghiệm
            <br />
            <span className="text-green-500">từ 8 năm luyện thi</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Nên học qua nền tảng trực tuyến hay mạng xã hội? Hãy nghe chia sẻ từ
            những thủ khoa.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Đăng ký ngay
          </button>
        </div>
        <div>
          <img src="anh2.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
}
