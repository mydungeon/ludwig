import React from "react";
import { SiteHeader } from "src/ui/features/Headers";
import { LudwigLogo } from "src/ui/features/Logos";
import { SITE_NAME } from "src/ui/features/Headers/Site/Site.constants";

export default function LudwigSiteHeader() {
  return (
    <SiteHeader>
      <LudwigLogo logoText={SITE_NAME} />
    </SiteHeader>
  );
}
