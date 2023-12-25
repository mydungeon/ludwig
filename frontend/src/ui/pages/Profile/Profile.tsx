import React from "react";
import Page from "src/ui/components/Page/Page";
import UserDetails from "src/ui/components/UserDetails";

export default function ProfilePage() {
  return (
    <Page pageTitleText="Profile">
      <UserDetails />
    </Page>
  );
}
