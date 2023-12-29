import { createContext } from "react";
export type AppContextType = {
  showPreloader: true | false;
  handleShowPreloader: (isLoading: boolean) => void;
};
export const AppContext = createContext<AppContextType>({
  showPreloader: false,
  handleShowPreloader: (isLoading: boolean) => {},
});
