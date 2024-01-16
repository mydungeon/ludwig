import React from "react";
import { SiteHeader } from "src/ui/features/Headers";
import { DroogAiLogo } from "src/ui/features/Logos";
import { DROOG_AI } from "src/ui/features/Headers/Site/Site.constants";

export default function DroogAiSiteHeader() {
  return (
    <SiteHeader>
      <DroogAiLogo logoText={DROOG_AI} />
    </SiteHeader>
  );
}
