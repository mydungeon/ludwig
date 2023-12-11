import React from "react";
import { useAppSelector } from "src/redux/store";
import Header from "src/ui/elements/Header";
import LoggedOutMenu from "./components/LoggedOutMenu";
import Logo from "../../components/Logo";
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
