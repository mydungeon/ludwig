export default interface ChatMessagesProps {
  messages: ChatMessage[];
  userName?: string;
}

interface ChatMessage {
  content: string;
  role: string;
}
