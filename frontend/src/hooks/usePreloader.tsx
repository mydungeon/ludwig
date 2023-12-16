import { useContext, useEffect } from "react";
import { AppContextType, AppContext } from "src/context/App";

export default function usePreloader(isLoading: boolean) {
  const { handleSetContext } = useContext<AppContextType>(AppContext);

  useEffect(() => {
    if (isLoading) {
      handleSetContext(true);
    } else {
      handleSetContext(false);
    }
  }, [isLoading, handleSetContext]);
}
