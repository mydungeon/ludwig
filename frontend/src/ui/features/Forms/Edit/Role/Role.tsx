import React, { useState } from "react";
import "./Role.styles.scss";
import MultiSelect from "src/ui/components/MultiSelect";
import Wrapper from "src/ui/components/Wrapper";

const MULTI_SELECT_OPTIONS = [
  {
    id: 0,
    title: "admin",
  },
  {
    id: 1,
    title: "user",
  },
  {
    id: 2,
    title: "engineer",
  },
];

export default function EditRoleForm() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleOption = ({ id }: { id: number }) => {
    setSelected((prevSelected: number[]) => {
      // if it's in, remove
      const newArray = [...prevSelected];
      if (newArray.includes(id)) {
        return newArray.filter((item) => item != id);
        // else, add
      } else {
        newArray.push(id);
        return newArray;
      }
    });
  };
  return (
    <Wrapper>
      <form className="role" data-testid="role">
        <div>Edit Role</div>
        <MultiSelect
          options={MULTI_SELECT_OPTIONS}
          selected={selected}
          toggleOption={toggleOption}
        />
      </form>
    </Wrapper>
  );
}
