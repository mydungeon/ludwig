import { useContext, useEffect } from "react";
import { AppContextType, AppContext } from "src/context/App";

export default function usePreloader(isLoading: boolean) {
  const { handleShowPreloader } = useContext<AppContextType>(AppContext);

  useEffect(() => {
    if (isLoading) {
      handleShowPreloader(true);
    } else {
      handleShowPreloader(false);
    }
  }, [isLoading, handleShowPreloader]);
}
