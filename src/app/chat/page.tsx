"use client";
import { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ChatHeader from "../../components/ChatHeader";
import MessageBubble from "../../components/MessageBubble";
import ChatInput from "../../components/ChatInput";
import { DUMMY_CONTACTS, DUMMY_MESSAGES } from "../../data/dummyData";
import { Message } from "../../types/chat";

export default function ChatPage() {
  const [activeChatId, setActiveChatId] = useState<number>(DUMMY_CONTACTS[0].id);
  const [messages, setMessages] = useState<Record<number, Message[]>>(DUMMY_MESSAGES)

  const [inputText, setInputText] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const activeContact = DUMMY_CONTACTS.find(c => c.id === activeChatId);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeChatId]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "user",
    };

    setMessages((prev) => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessage],
    }));

    setInputText("");
  };

  const handleRefreshChats = () => {
    setMessages(DUMMY_MESSAGES);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        contacts={DUMMY_CONTACTS}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onRefresh={handleRefreshChats}
      />

      <div className="flex-1 flex flex-col bg-white">
        <ChatHeader contact={activeContact} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {(messages[activeChatId] || []).map((m) => (
            <MessageBubble key={m.id} text={m.text} sender={m.sender} />
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
