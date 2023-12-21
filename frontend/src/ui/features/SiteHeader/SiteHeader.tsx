import React from "react";
import { useAppSelector } from "src/redux/store";
import Header from "src/ui/elements/Header";
import Logo from "src/ui/components/Logo";
import LoggedOutMenu from "./components/LoggedOutMenu";
import LoggedInMenu from "./components/LoggedInMenu/LoggedInMenu";
import "./SiteHeader.styles.scss";

export default function SiteHeader() {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <Header classNames="site" data-testid="siteHeader">
      <Logo classNames="siteHeader" logoText="Hubarc" />
      {!user ? <LoggedOutMenu /> : <LoggedInMenu {...user} />}
    </Header>
  );
}
