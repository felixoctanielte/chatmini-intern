"use client";
import { Search, X, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Contact } from "../types/chat";

interface SidebarProps {
  contacts: Contact[];
  activeChatId: number;
  setActiveChatId: (id: number) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
}

export default function Sidebar({
  contacts,
  activeChatId,
  setActiveChatId,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed md:static z-40 top-0 left-0 h-full w-72 bg-white border-r
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >

        <div className="p-4 border-b flex items-center gap-2 font-bold text-orange-500 text-lg">
          ChatMini
        </div>


        <div className="p-4 border-b flex justify-between items-center">
          <h1 className="font-semibold text-gray-700">Obrolan</h1>
          <RotateCcw className="w-4 h-4 text-gray-500 cursor-pointer hover:text-orange-500" />
        </div>

        <div className="p-3 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari kontak..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-100 rounded-md py-2 pl-10 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-y-auto">
          {filteredContacts.map((c) => (
            <div
              key={c.id}
              onClick={() => setActiveChatId(c.id)}
              className={`p-4 cursor-pointer border-b transition ${
                activeChatId === c.id ? "bg-orange-50 border-r-4 border-orange-500" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex justify-between">
                <h3 className="font-semibold text-sm">{c.name}</h3>
                <span className="text-[10px] text-gray-400">{c.time}</span>
              </div>
              <p className="text-xs text-gray-500 truncate">{c.lastMsg}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
