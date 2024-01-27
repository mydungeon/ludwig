export interface ChatInputProps {
  children?: JSX.Element[] | JSX.Element;
}

export enum ROLES {
  USER = "user",
  SYSTEM = "system",
}

export enum PROMPTS {
  INITIAL = "You are a helpful assistant named Droog AI. Introduce yourself as Droog AI.",
}

export enum TEXT_AREA {
  CLASSNAME = "input",
  PLACEHODER = "Message Droog AI...",
}
