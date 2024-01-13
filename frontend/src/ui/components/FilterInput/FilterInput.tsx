import React from "react";
import FilterInputProps from "./FilterInput.types";
import "./FilterInput.styles.scss";

export default function FilterInput({ onChange }: FilterInputProps) {
  return (
    <div className="filterInput" data-testid="filterInput">
      <input
        className="input filter"
        onChange={onChange}
        placeholder="Filter users"
        type="text"
      />
    </div>
  );
}