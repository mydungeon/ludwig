import React from "react";
import TableProps from "./Table.types";
import { filterKeys } from "./Table.utils";
import Ellipse from "../Ellipse";
import "./Table.styles.scss";

export default function Table({ data, columns }: TableProps) {
  return (
    <table className="table" data-testid="table">
      {data[0] && (
        <thead key="thead">
          <tr key="header">
            {filterKeys(data[0], columns).map((key: string, ii: number) => (
              <th key={`${key}-${ii}`}>{key}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody key="tbody">
        {data?.map((datum: any, i: number) => {
          return (
            <tr key={i}>
              {Object.values(datum).map((value: any, iii) => (
                <td key={`${value}-${iii}`}>
                  <Ellipse length={8} text={value} />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
