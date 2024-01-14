import { useLayoutEffect, useRef, useState } from "react";
import { getWrapperWidth } from "src/ui/charts/Charts.utils";
import { USE_DIMENSIONS_TIMEOUT, debounce } from "src/utils";

// ARTICLE: https://ironeko.com/posts/find-element-size-in-react-with-the-usedimensions-hook

export default function useDimensions() {
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(getWrapperWidth());
  const elementRef = useRef<any>(null);
  function setDimensions() {
    setWidth(getWrapperWidth());
    setHeight(elementRef.current.offsetHeight);
  }

  const debounced = debounce(setDimensions, USE_DIMENSIONS_TIMEOUT);

  useLayoutEffect(() => {
    window.addEventListener("resize", debounced);
    return () => {
      window.removeEventListener("resize", debounced);
    };
  }, [debounced, elementRef]);

  return [elementRef, height, width];
}
