"use client";
import { Send } from "lucide-react";

interface ChatInputProps {
  inputText: string;
  setInputText: (value: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
}

export default function ChatInput({ inputText, setInputText, handleSendMessage }: ChatInputProps) {
  return (
    <div className="p-4 bg-white border-t shadow-inner">
      <form onSubmit={handleSendMessage} className="relative flex items-center">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ketik pesan..."
          className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 px-6 pr-14 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
        />
        <button type="submit" className="absolute right-2 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}