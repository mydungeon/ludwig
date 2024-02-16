import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { Ellipse, Icon } from "src/ui/components";
import { Tooltip } from "src/ui/components";
import { setTooltipDirection } from "src/ui/components/Table/Table.utils";

export default function TableRow({ ...props }: any) {
  const { data, maxCellTextLength } = props;
  return (
    <tbody key="tbody">
      {data?.map((datum: any, i: number) => {
        return (
          <tr key={i}>
            <td>
              <Link to={`/user/${datum._id}`}>
                <Icon icon={faUser} />
              </Link>
            </td>
            {Object.values(datum).map((value: any, iii, array) => {
              return value &&
                maxCellTextLength &&
                value.length > maxCellTextLength ? (
                <td key={`${value}-${iii}`}>
                  <Tooltip
                    message={value}
                    delay={0}
                    direction={setTooltipDirection(iii, array.length)}
                  >
                    <Ellipse length={maxCellTextLength} text={value} />
                  </Tooltip>
                </td>
              ) : value !== null ? (
                <td key={`${value}-${iii}`}>{value}</td>
              ) : (
                <td className="nullValue" key={`${value}-${iii}`}>
                  <i>null</i>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
