export default function UserRange() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Ai phù hợp với nền tảng này?
      </h2>
      <p className="text-gray-500 mt-2 mb-10">
        Chúng tôi hỗ trợ nhiều đối tượng khác nhau trong hành trình học tập và
        ôn luyện
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" rounded-lg p-6 shadow">
          <div className="text-green-600 mb-4 text-4xl">🎓</div>
          <h3 className="font-semibold text-lg text-gray-700">Học sinh</h3>
          <p className="text-gray-500 mt-2">
            Luyện thi THPT, bám sát chương trình học, nhiều đề thử
          </p>
        </div>

        <div className=" rounded-lg p-6 shadow">
          <div className="text-green-600 mb-4 text-4xl">🎒</div>
          <h3 className="font-semibold text-lg text-gray-700">Sinh viên</h3>
          <p className="text-gray-500 mt-2">
            Kiểm tra kỹ năng chuyên ngành, ôn tập các môn đại cương
          </p>
        </div>

        <div className=" rounded-lg p-6 shadow">
          <div className="text-green-600 mb-4 text-4xl">👩‍🏫</div>
          <h3 className="font-semibold text-lg text-gray-700">Giáo viên</h3>
          <p className="text-gray-500 mt-2">
            Tạo đề nhanh chóng, quản lý kết quả học sinh, phân tích tiến độ
          </p>
        </div>
      </div>
    </section>
  );
}
