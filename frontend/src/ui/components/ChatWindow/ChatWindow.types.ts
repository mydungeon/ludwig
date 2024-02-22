export interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  maxChat: boolean;
  receiverName: string;
}
export interface ChatWindowProps {
  receiverId: string;
  receiverName: string;
}

export interface ExpandedChatProps {
  isMaximized: boolean;
  isClosed: boolean;
  handleClose: () => void;
  handleMaximize: () => void;
  handleCollapse: () => void;
  receiverId: string;
  receiverName: string;
}
