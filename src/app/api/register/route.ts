
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";


console.log("DATABASE_URL:", process.env.DATABASE_URL);

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "Email sudah terdaftar" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { username, email, password: hashed }
  });

  return NextResponse.json({ success: true });
}
