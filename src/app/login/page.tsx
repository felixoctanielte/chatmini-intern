"use client";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 px-4">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">Sign in to continue to your account</p>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPass ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <Eye
              size={18}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            />
          </div>
        </div>

        <div className="text-right text-sm">
          <span className="text-orange-500 cursor-pointer hover:underline">
            Forgot password?
          </span>
        </div>
        <button
          onClick={() => router.push("/chat")}
          className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
        >
          Sign In
        </button>

        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <div className="flex-1 h-px bg-gray-200"></div>
          Or continue with
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button className="w-full border rounded-xl py-3 text-sm font-medium flex justify-center items-center gap-2 hover:bg-gray-50 transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
          Google
        </button>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-orange-500 font-semibold cursor-pointer hover:underline"
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
}
