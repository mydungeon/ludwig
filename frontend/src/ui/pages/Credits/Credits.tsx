import React from "react";
import { PageWithFooter } from "src/ui/features/Pages";
import ImageGrid from "src/ui/components/ImageGrid";

export default function CreditsPage() {
  return (
    <PageWithFooter classNames="credits" pageTitle="I wuz made with luv">
      <ImageGrid />
    </PageWithFooter>
  );
}
