import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";


// export async function POST(req: Request) {
//   const { email, password } = await req.json();

//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user) {
//     return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
//   }

//   const valid = await bcrypt.compare(password, user.password);
//   if (!valid) {
//     return NextResponse.json({ error: "Password salah" }, { status: 401 });
//   }

//   // --- BAGIAN YANG DIUBAH ---
//   const cookieStore = await cookies(); // Pakai await di sini
//   cookieStore.set("userId", String(user.id), {
//     httpOnly: true, // Biar lebih aman dari XSS
//     path: "/",      // Biar cookie berlaku di semua halaman
//   });
//   // --------------------------

//   return NextResponse.json({ success: true });
// }

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json({ error: "Email dan password wajib diisi" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ 
      where: { email: email } 
    });

    if (!user) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set("userId", String(user.id), {
      httpOnly: true,
      path: "/",
    });
    return NextResponse.json({ 
      success: true, 
      user: { id: user.id, email: user.email, username: user.username } 
    });

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}