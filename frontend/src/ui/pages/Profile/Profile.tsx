import React from "react";
import { UserDetails } from "src/ui/components";
import { BrandedFooterPage } from "src/ui/features/Pages";

export default function ProfilePage() {
  return (
    <BrandedFooterPage pageTitle="Profile">
      <UserDetails />
    </BrandedFooterPage>
  );
}
