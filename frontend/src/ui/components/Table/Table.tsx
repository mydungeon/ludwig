import React from "react";
import TableProps from "./Table.types";
import { TableBody, TableHeader } from "./components";
import "./Table.styles.scss";

export default function Table({
  columns,
  data,
  maxCellTextLength,
}: TableProps) {
  // https://www.smashingmagazine.com/2020/03/sortable-tables-react/
  // const [sortedField, setSortedField] = useState(null);
  // const [sortedData, setSortedData] = useState(data);
  // useEffect(() => {
  //   if (sortedField !== null) {
  //     setSortedData(
  //       data.sort((a: number | string, b: number | string) => {
  //         console.log("a[sortedField]", a[sortedField]);
  //         if (a[sortedField] < b[sortedField]) {
  //           return -1;
  //         }
  //         if (a[sortedField] > b[sortedField]) {
  //           return 1;
  //         }
  //         return 0;
  //       })
  //     );
  //   }
  // }, [data, sortedData, sortedField]);
  return (
    <div className="tableWrapper" data-testid="table">
      <table className="table">
        <TableHeader columns={columns} />
        <TableBody data={data} maxCellTextLength={maxCellTextLength} />
      </table>
    </div>
  );
}
