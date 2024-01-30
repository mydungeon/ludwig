export interface ChatInputProps {
  children?: JSX.Element[] | JSX.Element;
}

export enum ROLES {
  USER = "user",
  SYSTEM = "system",
}

export enum PROMPTS {
  INITIAL = "Introduce yourself as, Droog AI, the helpful engineer.",
}

export enum TEXT_AREA {
  CLASSNAME = "input",
  PLACEHODER = "Message Droog AI...",
}
