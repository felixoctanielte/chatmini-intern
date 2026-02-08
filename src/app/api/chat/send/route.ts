export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { content, chatId } = await req.json();

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!content) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 });
    }
    const userMessage = await prisma.message.create({
      data: {
        content,
        sender: "user",
        chatId: Number(chatId),
      },
    });

    const history = await prisma.message.findMany({
      where: { chatId: Number(chatId) },
      orderBy: { createdAt: "asc" },
      take: 10,
    });

    const messages = [
      {
        role: "system",
        content: "Kamu adalah asisten AI yang ramah dan membantu.",
      },
      ...history.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content,
      })),
    ];

    const aiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages,
        max_tokens: 250,
      }),
    });

    const data = await aiRes.json();

    const aiReply = data.choices?.[0]?.message?.content || 
                    "AI sedang mengalami gangguan. Coba beberapa saat lagi.";

    const botResponse = await prisma.message.create({
      data: {
        content: aiReply,
        sender: "bot",
        chatId: Number(chatId),
      },
    });

    return NextResponse.json({ userMessage, botResponse });

  } catch (error: any) {
    console.error("AI ERROR FULL:", error);
    return NextResponse.json(
      { 
        error: "AI gagal membalas",
        detail: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}
