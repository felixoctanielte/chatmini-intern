"use client";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) setEmailError("Email tidak valid (contoh: user@gmail.com)");
    else setEmailError("");
  };

  const validatePassword = (value: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!regex.test(value)) setPassError("Password min 8 karakter & kombinasi huruf + angka");
    else setPassError("");
  };

  const handleLogin = () => {
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passError && email && password) router.push("/chat");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">

        <div className="text-center space-y-3">
          <img src="/Logo Chatrigo 5.png" className="mx-auto w-20 object-contain" />
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">Sign in to continue to your account</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className={`w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 ${
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
              placeholder="Enter your password"
              className={`w-full border rounded-xl py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 ${
                passError ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-orange-400"
              }`}
            />
            <Eye size={18} onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>
          {passError && <p className="text-xs text-red-500">{passError}</p>}
        </div>

        <button
          onClick={handleLogin}
          disabled={!email || !password || !!emailError || !!passError}
          className={`w-full py-3 rounded-xl font-semibold shadow-md transition ${
            !email || !password || emailError || passError
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:opacity-90"
          }`}
        >
          Sign In
        </button>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span onClick={() => router.push("/register")} className="text-orange-500 font-semibold cursor-pointer hover:underline">
            Sign up here
          </span>
        </p>

      </div>
    </div>
  );
}
