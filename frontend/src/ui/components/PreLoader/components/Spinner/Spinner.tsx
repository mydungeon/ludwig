import React from "react";
import "./Spinner.styles.scss";

// ARTICLE: https://loading.io/css/

export default function Spinner() {
  return (
    <div className="spinner" data-testid="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
