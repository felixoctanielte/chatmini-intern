"use client";
import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import ChatInput from "@/components/ChatInput";
import { Message } from "@/types/chat";

interface ChatClientProps {
  userId: string;
  initialChats: any[];
}

export default function ChatClient({ userId, initialChats }: ChatClientProps) {
  const [sessions, setSessions] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState<number>(initialChats[0]?.id || 0);
  
  const [messages, setMessages] = useState<Record<number, any[]>>(() => {
    const map: Record<number, any[]> = {};
    initialChats.forEach(chat => {
      map[chat.id] = chat.messages || [];
    });
    return map;
  });

  const [inputText, setInputText] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const activeContact = sessions.find(c => c.id === activeChatId);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeChatId]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const currentInput = inputText;
    setInputText("");

    try {
      const res = await fetch("/api/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: currentInput,
          chatId: activeChatId,
        }),
      });

      const data = await res.json();

      if (data.userMessage && data.botResponse) {
        setMessages(prev => ({
          ...prev,
          [activeChatId]: [
            ...(prev[activeChatId] || []),
            { id: data.userMessage.id, text: data.userMessage.content, sender: "user" },
            { id: data.botResponse.id, text: data.botResponse.content, sender: "bot" },
          ],
        }));
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleRefreshChats = async () => {
    window.location.reload();
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        contacts={sessions.map(s => ({ id: s.id, name: s.title || "Chat Baru", avatar: "/Logo Chatrigo 5.png" }))}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onRefresh={handleRefreshChats}
      />

      <div className="flex-1 flex flex-col bg-white">
        <ChatHeader contact={activeContact ? { name: activeContact.title || "Chat" } : undefined} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {(messages[activeChatId] || []).map((m) => (
            <MessageBubble key={m.id} text={m.text || m.content} sender={m.sender} />
          ))}
          <div ref={bottomRef} />
        </div>

        <ChatInput
          inputText={inputText}
          setInputText={setInputText}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}