"use client";
import { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ChatHeader from "../../components/ChatHeader";
import MessageBubble from "../../components/MessageBubble";
import ChatInput from "../../components/ChatInput";


export default function ChatPage() {
  const [activeChat, setActiveChat] = useState("Brightly Virya");

  const [messages, setMessages] = useState({
    "Brightly Virya": [
      { id: 1, text: "Halo! Ada yang bisa dibantu?", sender: "bot" },
      { id: 2, text: "Saya mau tanya produk.", sender: "user" },
    ],
    "AI Business Advisor": [
      { id: 1, text: "Konsultasi bisnis tersedia.", sender: "bot" },
    ],
  });

  const [inputText, setInputText] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeChat]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages((prev) => ({
      ...prev,
      [activeChat]: [
        ...(prev[activeChat] || []),
        { id: Date.now(), text: inputText, sender: "user" },
      ],
    }));

    setInputText("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeChat={activeChat} setActiveChat={setActiveChat} />
      <div className="flex-1 flex flex-col">
        <ChatHeader activeChat={activeChat} />
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
          {(messages[activeChat] || []).map((m) => (
            <MessageBubble key={m.id} text={m.text} sender={m.sender} />
          ))}
          <div ref={bottomRef} />
        </div>
        <ChatInput inputText={inputText} setInputText={setInputText} handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
