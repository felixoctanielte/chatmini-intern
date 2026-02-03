"use client";
import React, { useState } from 'react';

// 1. Dummy Data untuk Sidebar [cite: 9, 14]
const DUMMY_CONTACTS = [
  { id: 1, name: "AI Business Advisor", lastMsg: "Instruksi bisnis dengan AI" },
  { id: 2, name: "Brightly Virya", lastMsg: "Baik boleh kak" },
  { id: 3, name: "Ayunda", lastMsg: "Menunggu konfirmasi..." },
];

export default function ChatPage() {
  // 2. State untuk menampung pesan [cite: 7, 17]
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Ada yang bisa dibantu?", sender: "bot" },
    { id: 2, text: "Berapa biaya layanannya?", sender: "user" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Tambah pesan baru ke array sementara 
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setInputText(""); // Reset input
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR: List Kontak [cite: 14] */}
      <div className="w-1/4 bg-white border-r flex flex-col">
        <div className="p-4 font-bold text-xl border-b">Obrolan</div>
        <div className="overflow-y-auto">
          {DUMMY_CONTACTS.map((contact) => (
            <div key={contact.id} className="p-4 hover:bg-gray-50 cursor-pointer border-b">
              <p className="font-semibold">{contact.name}</p>
              <p className="text-sm text-gray-500 truncate">{contact.lastMsg}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT WINDOW: Area Pesan  */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-white shadow-sm font-bold">Brightly Virya</div>
        
        <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.sender === "user" 
                ? "bg-orange-500 text-white self-end" // Rata kanan untuk User 
                : "bg-gray-200 text-black self-start" // Rata kiri untuk Bot 
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT AREA  */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ketik pesan..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}