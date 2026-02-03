"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi login langsung pindah ke halaman chat
    router.push("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-md rounded-lg flex flex-col gap-4 w-80">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <input type="email" placeholder="Email" className="border p-2 rounded" required />
        <input type="password" placeholder="Password" className="border p-2 rounded" required />
        <button type="submit" className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
          Masuk
        </button>
      </form>
    </div>
  );
}