"use client";
import { Search } from "lucide-react";
import { DUMMY_CONTACTS } from "../data/dummyContacts";
import { useState } from "react";

export default function Sidebar({ activeChat, setActiveChat }) {
  const [search, setSearch] = useState("");

  const filtered = DUMMY_CONTACTS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-80 border-r flex flex-col bg-white shadow-sm hidden md:flex">
      <div className="p-4 border-b">
        <h1 className="font-bold text-xl text-orange-500">Chatrigo</h1>
      </div>

      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full bg-gray-100 rounded-md py-2 pl-10 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filtered.map((c) => (
          <div
            key={c.id}
            onClick={() => setActiveChat(c.name)}
            className={`p-4 flex gap-3 border-b cursor-pointer hover:bg-orange-50 ${
              activeChat === c.name ? "bg-orange-50 border-r-4 border-orange-500" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold">
              {c.name[0]}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{c.name}</h3>
              <p className="text-xs text-gray-500 truncate">{c.lastMsg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
