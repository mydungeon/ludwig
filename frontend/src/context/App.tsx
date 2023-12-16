import { createContext } from "react";
export type AppContextType = {
  context: true | false;
  handleSetContext: (isLoading: boolean) => void;
};
export const AppContext = createContext<AppContextType>({
  context: false,
  handleSetContext: (isLoading: boolean) => {},
});
