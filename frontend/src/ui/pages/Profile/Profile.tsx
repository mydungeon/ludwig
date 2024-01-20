import React from "react";
import { UserProfile } from "src/ui/components";
import { BrandedFooterPage } from "src/ui/features/Pages";

export default function ProfilePage() {
  return (
    <BrandedFooterPage pageTitle="Profile">
      <UserProfile />
    </BrandedFooterPage>
  );
}
