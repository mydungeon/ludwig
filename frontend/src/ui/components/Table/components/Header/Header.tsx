import React from "react";
import { TableHeaderSortIcon } from "src/ui/features/Icons";
import "./Header.styles.scss";

export default function TableHeader({ ...props }) {
  const { columns, handleSetSortField } = props;
  return (
    <thead className="tableHeader" key="thead">
      <tr key="header">
        {columns.map(
          ({ name, sort }: { name: string; sort?: boolean }, index: number) => (
            <th
              className={sort ? "sort" : ""}
              onClick={() => handleSetSortField(name)}
              key={`${name}-${index}`}
            >
              <span>{name}</span>
              {sort && (
                <span>
                  <TableHeaderSortIcon />
                </span>
              )}
            </th>
          )
        )}
      </tr>
    </thead>
  );
}
