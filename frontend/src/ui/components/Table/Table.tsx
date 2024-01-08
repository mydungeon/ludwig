import React from "react";
import TableProps from "./Table.types";
import { TableBody, TableHeader } from "./components";
import "./Table.styles.scss";

export default function Table({
  columns,
  data,
  maxCellTextLength,
}: TableProps) {
  return (
    <div className="tableWrapper" data-testid="table">
      <table className="table">
        <TableHeader columns={columns} data={data[0]} />
        <TableBody data={data} maxCellTextLength={maxCellTextLength} />
      </table>
    </div>
  );
}
