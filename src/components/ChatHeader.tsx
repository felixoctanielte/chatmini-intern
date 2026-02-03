import { Menu } from "lucide-react";
import { Contact } from "../types/chat";

interface Props {
  contact?: Contact;
  setSidebarOpen: (v: boolean) => void;
}

export default function ChatHeader({ contact, setSidebarOpen }: Props) {
  if (!contact) return null;

  return (
    <div className="h-16 border-b flex items-center px-4 justify-between bg-white">
      <div className="flex items-center gap-3">
        <Menu className="md:hidden cursor-pointer" onClick={() => setSidebarOpen(true)} />

        <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold">
          {contact.name.charAt(0)}
        </div>

        <div>
          <h2 className="font-bold text-sm">{contact.name}</h2>
          <span className={`text-[10px] ${contact.online ? "text-green-500" : "text-gray-400"}`}>
            ● {contact.online ? "Online" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
}
