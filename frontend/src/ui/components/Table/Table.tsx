import React from "react";
import TableProps from "./Table.types";
import { filterKeys } from "./Table.utils";
import Ellipse from "../Ellipse";
import "./Table.styles.scss";
import Tooltip from "../Tooltip";
import { TooltipDirection } from "../Tooltip/Tooltip.types";

export default function Table({
  columns,
  data,
  maxCellTextLength,
}: TableProps) {
  return (
    <div className="tableWrapper" data-testid="table">
      <table className="table">
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
                {Object.values(datum).map((value: any, iii, array) => {
                  const direction =
                    iii === 0
                      ? TooltipDirection.RIGHT
                      : iii < array.length - 1
                      ? TooltipDirection.TOP
                      : TooltipDirection.LEFT;
                  return maxCellTextLength &&
                    value.length > maxCellTextLength ? (
                    <td key={`${value}-${iii}`}>
                      <Tooltip message={value} direction={direction}>
                        <Ellipse length={maxCellTextLength} text={value} />
                      </Tooltip>
                    </td>
                  ) : (
                    <td key={`${value}-${iii}`}>{value}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
