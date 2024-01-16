import React from "react";
import { BrandedFooterPage } from "src/ui/features/Pages";
import ImageGrid from "src/ui/components/ImageGrid";

export default function CreditsPage() {
  return (
    <BrandedFooterPage classNames="credits" pageTitle="The Technology">
      <ImageGrid />
    </BrandedFooterPage>
  );
}
