export default function ChatHeader({ activeChat }) {
  return (
    <div className="h-16 border-b flex items-center px-6 bg-white shadow-sm">
      <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold">
        {activeChat[0]}
      </div>
      <h2 className="ml-3 font-bold text-sm">{activeChat}</h2>
    </div>
  );
}
