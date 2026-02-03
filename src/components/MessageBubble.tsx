export default function MessageBubble({ text, sender }: { text: string; sender: string }) {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[65%] p-4 rounded-2xl text-sm shadow-sm ${
        sender === "user"
          ? "bg-orange-500 text-white rounded-tr-none"
          : "bg-gray-100 text-gray-700 rounded-tl-none border"
      }`}>
        {text}
      </div>
    </div>
  );
}
