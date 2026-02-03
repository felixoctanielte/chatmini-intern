export interface Contact {
  id: number;
  name: string;
  lastMsg: string;
  time: string;
  online?: boolean;
}

export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}
