import React from "react";
import Icon from "src/ui/components/Icon";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./Header.styles.scss";

export default function TableHeader({ ...props }) {
  const { columns } = props;
  return (
    <thead className="tableHeader" key="thead">
      <tr key="header">
        {columns.map(
          ({ name, sort }: { name: string; sort?: boolean }, index: number) => (
            <th key={`${name}-${index}`}>
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
