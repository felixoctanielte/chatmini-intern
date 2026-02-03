"use client";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Eye } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) setEmailError("Format email tidak valid");
    else setEmailError("");
  };

  const validatePassword = (value: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!regex.test(value)) setPassError("Minimal 8 karakter & kombinasi huruf + angka");
    else setPassError("");
  };

  const validateConfirm = (value: string) => {
    if (value !== password) setConfirmError("Password tidak sama");
    else setConfirmError("");
  };

  const handleRegister = () => {
    validateEmail(email);
    validatePassword(password);
    validateConfirm(confirm);

    if (username && email && password && confirm && !emailError && !passError && !confirmError) {
      router.push("/chat");
    }
  };

  const isInvalid = !username || !email || !password || !confirm || !!emailError || !!passError || !!confirmError;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">

        <div className="text-center space-y-3">
          <img src="/Logo Chatrigo 5.png" className="mx-auto w-20 object-contain" alt="Logo" />
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-sm text-gray-500">Join Chatrigo and start your journey</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Username</label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Pilih username unik"
              className="w-full border border-gray-200 rounded-xl py-3 pl-10 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder="nama@email.com"
              className={`w-full border rounded-xl py-3 pl-10 text-sm focus:ring-2 outline-none ${
                emailError ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-orange-400"
              }`}
            />
          </div>
          {emailError && <p className="text-xs text-red-500">{emailError}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              placeholder="Minimal 8 karakter"
              className={`w-full border rounded-xl py-3 pl-10 pr-10 text-sm focus:ring-2 outline-none ${
                passError ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-orange-400"
              }`}
            />
            <Eye size={18} onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>
          {passError && <p className="text-xs text-red-500">{passError}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Konfirmasi Password</label>
          <div className="relative">
            <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
                validateConfirm(e.target.value);
              }}
              placeholder="Ketik ulang password"
              className={`w-full border rounded-xl py-3 pl-10 pr-10 text-sm focus:ring-2 outline-none ${
                confirmError ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-orange-400"
              }`}
            />
            <Eye size={18} onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>
          {confirmError && <p className="text-xs text-red-500">{confirmError}</p>}
        </div>

        <button
          onClick={handleRegister}
          disabled={isInvalid}
          className={`w-full py-3 rounded-xl font-semibold transition ${
            isInvalid
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-orange-500 text-white hover:opacity-90"
          }`}
        >
          Create Account
        </button>

        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <div className="flex-1 h-px bg-gray-200"></div>
          Atau daftar dengan
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button type="button" className="w-full border rounded-xl py-3 text-sm font-medium flex justify-center items-center gap-2 hover:bg-gray-50 transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
          Google
        </button>

        <p className="text-center text-sm text-gray-500">
          Sudah punya akun?{" "}
          <span onClick={() => router.push("/login")} className="text-orange-500 font-semibold cursor-pointer hover:underline">
            Masuk di sini
          </span>
        </p>
      </div>
    </div>
  );
}