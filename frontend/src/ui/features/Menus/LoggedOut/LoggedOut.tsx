import React from "react";
import { SiteLink } from "src/ui/components";

export default function LoggedOutMenu() {
  return (
    <div data-testid="loggedOutMenu">
      <SiteLink
        classNames="button"
        linkText="Register"
        destination="/register"
      />
      <SiteLink classNames="button" linkText="Login" destination="/login" />
    </div>
  );
}
