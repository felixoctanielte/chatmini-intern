"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 flex flex-col">

      <header className="w-full flex items-center justify-between px-8 py-5 text-white">
        <div className="flex items-center gap-3">
          <img src="/Logo Chatrigo 5.png" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold tracking-wide">Chatrigo</span>
        </div>
        <Link href="/login" className="bg-white text-orange-600 px-5 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">
          Login
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">

          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Chat Smarter. <br /> Work Faster.
            </h1>
            <p className="text-orange-100 text-lg">
              Chatrigo membantu tim dan bisnis berkomunikasi lebih cepat dengan sistem chat yang ringan, responsif, dan mudah digunakan.
            </p>

            <div className="flex gap-4">
              <Link href="/login" className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                Mulai Sekarang
              </Link>
              <Link href="/register" className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition">
                Buat Akun
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
              <img src="/Logo Chatrigo 5.png" className="w-40 mx-auto object-contain drop-shadow-xl" />
              <p className="text-white text-center mt-6 text-lg font-medium">
                Simple. Fast. Powerful Chat UI.
              </p>
            </div>
          </div>

        </div>
      </main>

      <footer className="text-orange-100 text-sm text-center pb-6">
        © 2026 Chatrigo. All rights reserved.
      </footer>

    </div>
  );
}
