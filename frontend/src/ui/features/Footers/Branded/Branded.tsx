import React from "react";
import { Footer } from "src/ui/components";
import { FooterIcons } from "src/ui/features/Icons";
import { getCopyright } from "./Branded.utils";
import { LudwigLogo } from "../../Logos";

export default function BrandedFooter() {
  return (
    <Footer classNames="branded">
      <div>
        <LudwigLogo classNames="small" />
      </div>
      <div>
        <FooterIcons />
      </div>
      <div>
        <span>{getCopyright()}</span>
      </div>
    </Footer>
  );
}
