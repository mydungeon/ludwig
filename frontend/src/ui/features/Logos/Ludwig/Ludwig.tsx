import React from "react";
import LudwigLogoProps from "./Ludwig.types";
import { Logo } from "src/ui/components";
import { ReactComponent as Ludwig } from "src/assets/ludwig.svg";

export default function LudwigLogo({ classNames, logoText }: LudwigLogoProps) {
  return (
    <Logo classNames={classNames} logoText={logoText}>
      <Ludwig />
    </Logo>
  );
}
