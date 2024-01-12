import React from "react";
import { Ellipse } from "src/ui/components";
import { Tooltip } from "src/ui/components";
import { setTooltipDirection } from "src/ui/components/Table/Table.utils";

export default function TableRow({ ...props }: any) {
  const { data, maxCellTextLength } = props;
  return (
    <tbody key="tbody">
      {data?.map((datum: any, i: number) => {
        return (
          <tr key={i}>
            {Object.values(datum).map((value: any, iii, array) => {
              return maxCellTextLength && value.length > maxCellTextLength ? (
                <td key={`${value}-${iii}`}>
                  <Tooltip
                    message={value}
                    delay={0}
                    direction={setTooltipDirection(iii, array.length)}
                  >
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
  );
}
