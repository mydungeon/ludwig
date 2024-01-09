import { useLayoutEffect, useRef, useState } from "react";

export default function useDimensions() {
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(400);
  const elementRef = useRef<any>(null);
  useLayoutEffect(() => {
    setHeight(elementRef.current.offsetHeight);
    setWidth(elementRef.current.offsetWidth);
  }, [elementRef]);

  return [elementRef, height, width];
}
