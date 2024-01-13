import React from "react";
import { UserDetails } from "src/ui/components";
import { PageWithFooter } from "src/ui/features/Pages";

export default function ProfilePage() {
  return (
    <PageWithFooter pageTitle="Profile">
      <UserDetails />
    </PageWithFooter>
  );
}
