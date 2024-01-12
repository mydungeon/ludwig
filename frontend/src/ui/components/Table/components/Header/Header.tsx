import React from "react";
import { Icon } from "src/ui/components";
import { faSort } from "@fortawesome/free-solid-svg-icons";
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
                  <Icon classNames="sort" icon={faSort} />
                </span>
              )}
            </th>
          )
        )}
      </tr>
    </thead>
  );
}
