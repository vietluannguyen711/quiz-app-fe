import { useState } from "react";
import axiosInstance from "../api/axios";

export default function ForgotPassword() {
    // ForgotPassword.tsx
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await axiosInstance.post("/auth/forgot-password", { email });
        setMessage(res.data); // "Đã gửi mail reset mật khẩu"
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white shadow-xl rounded-2xl px-8 py-10"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Quên mật khẩu</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Nhập email của bạn"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
                >
                    Gửi yêu cầu
                </button>
                {message && (
                    <div className="mt-4 text-center text-green-600">{message}</div>
                )}
            </form>
        </div>
    );

}