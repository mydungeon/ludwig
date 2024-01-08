import React from "react";
import { filterKeys } from "src/ui/components/Table/Table.utils";
import TableHeaderProps from "./Header.types";

export default function TableHeader({ columns, data }: TableHeaderProps) {
  return data ? (
    <thead key="thead">
      <tr key="header">
        {filterKeys(data, columns).map((key: string, ii: number) => (
          <th key={`${key}-${ii}`}>{key}</th>
        ))}
      </tr>
    </thead>
  ) : null;
}
