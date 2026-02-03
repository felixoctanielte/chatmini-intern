import { Message } from "../types/chat"

export const DUMMY_CONTACTS = [
  { id: 1, name: "AI Business Advisor", lastMsg: "Konsultasi bisnis dengan AI", time: "4 Jan" },
  { id: 2, name: "204251498303683", lastMsg: "Anda: Intent menanyakan produk...", time: "4 Jan" },
  { id: 3, name: "227929069816302", lastMsg: "Anda: Konfirmasi pembayaran...", time: "4 Jan" },
  { id: 4, name: "Brightly Virya", lastMsg: "Anda: Wah mantap kak!", time: "5 Jan" },
  { id: 5, name: "Ayunda", lastMsg: "Anda: Tanya informasi...", time: "4 Jan" },
]

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
