import React from "react";
import { BrandedFooterPage } from "src/ui/features/Pages";
import { RatingForm } from "src/ui/features/Forms";

export default function RatingPage() {
  return (
    <BrandedFooterPage pageTitle="Rate Ludwig">
      <RatingForm />
    </BrandedFooterPage>
  );
}
