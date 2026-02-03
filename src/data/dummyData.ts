import { Message } from "../types/chat"

export const DUMMY_CONTACTS = [
  { id: 1, name: "AI Business Advisor", lastMsg: "Strategi scaling bisnis kamu bisa kita optimasi.", time: "09:12", online: true },
  { id: 2, name: "Rina Customer Support", lastMsg: "Halo kak, ada yang bisa dibantu?", time: "08:45", online: true },
  { id: 3, name: "Project Team UI/UX", lastMsg: "Wireframe revisi sudah aku upload ya.", time: "Kemarin", online: false },
  { id: 4, name: "Damar Backend Dev", lastMsg: "API endpoint sudah live", time: "Kemarin", online: false },
  { id: 5, name: "Ayunda Marketing", lastMsg: "Campaign minggu depan kita push ya", time: "Senin", online: true },
];



export const DUMMY_MESSAGES: Record<number, Message[]> = {
  1: [
    { id: 1, sender: "bot", text: "Halo Felix! Mau diskusi bisnis apa hari ini?" },
    { id: 2, sender: "user", text: "Gimana cara scale startup lebih cepat?" },
  ],
  2: [
    { id: 1, sender: "bot", text: "Halo kak, ada kendala?" },
  ],
  3: [
    { id: 1, sender: "bot", text: "Wireframe dashboard udah aku share ya." },
    { id: 2, sender: "user", text: "Siap, nanti aku cek." },
  ],
  4: [
    { id: 1, sender: "bot", text: "Endpoint auth sudah aman." },
  ],
  5: [
    { id: 1, sender: "bot", text: "Campaign ads mulai kapan?" },
  ],
}
