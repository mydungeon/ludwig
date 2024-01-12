import React from "react";
import { Page } from "src/ui/components";
import { UserDetails } from "src/ui/components";

export default function ProfilePage() {
  return (
    <Page pageTitle="Profile">
      <UserDetails />
    </Page>
  );
}
