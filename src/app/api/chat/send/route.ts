import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { content, chatId } = await req.json();
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const userMessage = await prisma.message.create({
      data: {
        content,
        sender: "user",
        chatId: Number(chatId),
      },
    });
    
    const botResponse = await prisma.message.create({
      data: {
        content: `Halo! Ini bot Chatrigo. Saya menerima pesanmu: "${content}". Besok saya akan lebih pintar setelah integrasi AI!`,
        sender: "bot",
        chatId: Number(chatId),
      },
    });

    return NextResponse.json({ userMessage, botResponse });
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengirim pesan" }, { status: 500 });
  }
}