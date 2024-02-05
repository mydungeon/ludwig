import React from "react";
import { TableHeaderSortIcon } from "src/ui/features/Icons";
import "./Header.styles.scss";

export default function TableHeader({ ...props }) {
  const { columns, handleSetSortField } = props;
  return (
    <thead className="tableHeader" key="thead">
      <tr key="header">
        {columns.map(
          (
            {
              name,
              sort,
              type,
            }: { name: string; sort?: boolean; type: string },
            index: number
          ) => (
            <th
              className={sort ? "sort" : ""}
              onClick={() => handleSetSortField(name, type)}
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
