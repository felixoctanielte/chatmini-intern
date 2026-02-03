"use client";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Menggunakan Link untuk navigasi antar halaman 

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Berhasil daftar, langsung arahkan ke halaman obrolan 
    router.push("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form 
        onSubmit={handleRegister} 
        className="p-8 bg-white shadow-lg rounded-xl flex flex-col gap-4 w-96 border border-gray-100"
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Daftar Akun</h1>
          <p className="text-gray-500 text-sm">Buat akun untuk mulai mengobrol</p>
        </div>

        {/* Input Nama Lengkap */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
          <input 
            type="text" 
            placeholder="Masukkan nama Anda" 
            className="border p-2.5 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" 
            required 
          />
        </div>

        {/* Input Email [cite: 39] */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input 
            type="email" 
            placeholder="nama@email.com" 
            className="border p-2.5 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" 
            required 
          />
        </div>

        {/* Input Password [cite: 39] */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="border p-2.5 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" 
            required 
          />
        </div>

        {/* Tombol Daftar  */}
        <button 
          type="submit" 
          className="bg-orange-500 text-white font-bold p-3 rounded-lg hover:bg-orange-600 transition-colors mt-2"
        >
          Daftar Sekarang
        </button>

        <p className="text-center text-sm text-gray-600 mt-2">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-orange-500 hover:underline font-medium">
            Masuk di sini
          </Link>
        </p>
      </form>
    </div>
  );
}