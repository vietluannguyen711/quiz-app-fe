import { useState } from "react";
import axiosInstance from "../api/axios";

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [message, setMessage] = useState("");
    const token = new URLSearchParams(window.location.search).get("token");

    const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newPassword !== confirm) {
            setMessage("Mật khẩu nhập lại không khớp");
            return;
        }
        try {
            await axiosInstance.post("/auth/reset-password", { token, newPassword });
            setMessage("Đổi mật khẩu thành công! Vui lòng đăng nhập lại.");
        } catch {
            setMessage("Token không hợp lệ hoặc đã hết hạn!");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleReset}
                className="w-full max-w-md bg-white shadow-xl rounded-2xl px-8 py-10"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Đặt lại mật khẩu</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">
                        Mật khẩu mới
                    </label>
                    <input
                        type="password"
                        required
                        minLength={6}
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Nhập mật khẩu mới"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">
                        Nhập lại mật khẩu
                    </label>
                    <input
                        type="password"
                        required
                        minLength={6}
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                        className="w-full px-4 py-2 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Nhập lại mật khẩu"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
                >
                    Đặt lại mật khẩu
                </button>
                {message && (
                    <div className="mt-4 text-center text-green-600">{message}</div>
                )}
            </form>
        </div>
    );
}