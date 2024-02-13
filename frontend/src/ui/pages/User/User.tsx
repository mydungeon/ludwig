import React from "react";
import { UserProfile } from "src/ui/components";
import { BrandedFooterPage } from "src/ui/features/Pages";

export default function UserPage() {
  return (
    <BrandedFooterPage pageTitle="Profile">
      <UserProfile />
    </BrandedFooterPage>
  );
}
