import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "src/ui/components";
import MultiSelectProps from "./MultiSelect.types";
import "./MultiSelect.styles.scss";

// Article: https://javascript.plainenglish.io/learn-to-build-a-react-multi-select-dropdown-in-less-than-3-minutes-a8b69fe021bd
export default function MultiSelectDropdown({
  options,
  selected,
  toggleOption,
}: MultiSelectProps) {
  return (
    <div className="multiSelect" data-testid="multiSelect">
      <div className="selected">
        <div>{selected.length} selected</div>
        <Icon icon={faChevronDown} />
      </div>
      <ul className="options">
        {options.map(({ id }) => {
          const isSelected = selected.includes(id);
          return (
            <li
              className="option"
              key={id}
              onClick={() => toggleOption({ id })}
            >
              <input
                type="checkbox"
                checked={isSelected}
                className="checkbox"
                onChange={() => {}} // added to avoid an error
              ></input>
              <span>{id}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
