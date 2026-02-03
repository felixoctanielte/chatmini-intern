"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Selamat Datang di Webloom Chat</h1>
      <Link href="/login" className="bg-orange-500 text-white px-6 py-2 rounded-lg">
        Masuk ke Aplikasi
      </Link>
    </div>
  );
}