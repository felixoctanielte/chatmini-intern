"use client";
import { useRouter } from "next/navigation";
import { Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input placeholder="Full Name" className="w-full border rounded-xl py-3 pl-10 text-sm" />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input placeholder="Email" className="w-full border rounded-xl py-3 pl-10 text-sm" />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input type="password" placeholder="Password" className="w-full border rounded-xl py-3 pl-10 text-sm" />
          </div>

          <button onClick={() => router.push("/chat")} className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
