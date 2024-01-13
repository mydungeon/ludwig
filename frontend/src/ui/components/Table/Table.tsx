import React from "react";
import TableProps from "./Table.types";
import { TableBody, TableHeader } from "./components";
import { Wrapper } from "src/ui/components";
import "./Table.styles.scss";

export default function Table({
  columns,
  data,
  handleSetSortField,
  maxCellTextLength,
}: TableProps) {
  return data.length > 0 ? (
    <div className="tableWrapper" data-testid="table">
      <table className="table">
        <TableHeader
          columns={columns}
          handleSetSortField={handleSetSortField}
        />
        <TableBody data={data} maxCellTextLength={maxCellTextLength} />
      </table>
    </div>
  ) : (
    <Wrapper classNames="tableResults">
      <h2>0 Results</h2>
    </Wrapper>
  );
}
