import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ChatClient from "../chat/ChatClient";

export default async function ChatPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    redirect("/login");
  }

  let userChats = await prisma.chatSession.findMany({
    where: { userId: Number(userId) },
    include: { 
      messages: {
        orderBy: { createdAt: "asc" }
      } 
    },
    orderBy: { createdAt: "desc" }
  });
  if (userChats.length === 0) {
    const newSession = await prisma.chatSession.create({
      data: {
        userId: Number(userId),
        title: "Percakapan Baru",
      },
      include: { messages: true }
    });
    userChats = [newSession];
  }

  return <ChatClient userId={userId} initialChats={userChats} />;
}