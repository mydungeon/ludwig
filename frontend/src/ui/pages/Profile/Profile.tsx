import React from "react";
import Page from "src/ui/components/Page/Page";
import UserDetails from "../../components/UserDetails";
import "./Profile.styles.scss";

export default function ProfilePage() {
  return (
    <Page
      classNames="profile"
      data-testid="profilePage"
      pageTitleText="Profile"
    >
      <UserDetails />
    </Page>
  );
}
