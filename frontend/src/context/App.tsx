import { createContext } from "react";
export type AppContextType = {
  showPreloader: true | false;
  showSiteMenu: true | false;
  handleShowPreloader: (isLoading: boolean) => void;
  handleShowSiteMenu: (show: boolean) => void;
};
export const AppContext = createContext<AppContextType>({
  showPreloader: false,
  showSiteMenu: false,
  handleShowPreloader: (isLoading: boolean) => {},
  handleShowSiteMenu: (show: boolean) => {},
});
