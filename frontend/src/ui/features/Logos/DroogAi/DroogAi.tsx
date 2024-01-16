import React from "react";
import DroogAiLogoProps from "./DroogAi.types";
import { Logo } from "src/ui/components";
import { ReactComponent as DroogAi } from "src/assets/droogai.svg";

export default function DroogAiLogo({
  classNames,
  logoText,
}: DroogAiLogoProps) {
  return (
    <Logo classNames={classNames} logoText={logoText}>
      <DroogAi />
    </Logo>
  );
}
