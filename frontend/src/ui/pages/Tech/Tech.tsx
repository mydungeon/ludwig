import React from "react";
import { BrandedFooterPage } from "src/ui/features/Pages";
import { ImageGrid, VENDOR_IMAGES } from "src/ui/components";

export default function TechPage() {
  return (
    <BrandedFooterPage classNames="tech" pageTitle="The Tech">
      <ImageGrid images={VENDOR_IMAGES} />
    </BrandedFooterPage>
  );
}
