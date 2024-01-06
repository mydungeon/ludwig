import React from "react";
import TableProps from "./Table.types";
import "./Table.styles.scss";

export default function Table({ data }: TableProps) {
  return (
    <div className="table" data-testid="table">
      {data?.map((datum: any, i: number) => {
        let header = null;
        if (i === 0) {
          header = (
            <tr key="header">
              {Object.keys(datum).map((key, ii) => (
                <th key={`${key}-${ii}`}>{key}</th>
              ))}
            </tr>
          );
        }
        return (
          <table>
            <thead>{header}</thead>
            <tbody>
              <tr key={i}>
                {Object.values(datum).map((value: any, iii) => (
                  <td key={`${value}-${iii}`}>{value}</td>
                ))}
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
