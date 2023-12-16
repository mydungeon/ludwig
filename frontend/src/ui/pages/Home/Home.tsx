import React from "react";
import HomePageProps from "./Home.types";
import "./Home.styles.scss";

export default function HomePage({ pageTitle }: HomePageProps) {
  return (
    <div className="home" data-testid="homePage">
      <div>{pageTitle}</div>
    </div>
  );
}
