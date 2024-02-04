import { useState } from "react";

export default function useToggle(initialToggleState: boolean) {
  const [toggle, setToggle] = useState(initialToggleState);

  function handleSetToggle() {
    setToggle(!toggle);
  }
  return {
    handleSetToggle,
    toggle,
  };
}
