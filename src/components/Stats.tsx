export default function Stats() {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Tạo điều kiện cho người học
              <span className="text-green-600"> nâng cao kỹ năng</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Chúng tôi giúp người học xây dựng sự tự tin thông qua hàng ngàn
              câu hỏi luyện tập về các chủ đề khác nhau và theo dõi sự tiến bộ.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-green-600 text-2xl font-bold">1,203,142</div>
              <p className="text-sm text-gray-600">Số người dùng đăng ký</p>
            </div>
            <div>
              <div className="text-green-600 text-2xl font-bold">3,804,234</div>
              <p className="text-sm text-gray-600">Số lần thực hành</p>
            </div>
            <div>
              <div className="text-green-600 text-2xl font-bold">12,584</div>
              <p className="text-sm text-gray-600">Số câu hỏi</p>
            </div>
            <div>
              <div className="text-green-600 text-2xl font-bold">15</div>
              <p className="text-sm text-gray-600">Các chủ đề</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
