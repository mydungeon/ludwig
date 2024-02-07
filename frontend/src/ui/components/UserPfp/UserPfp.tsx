import React, { useState } from "react";
import UserPfpProps from "./UserPfp.types";
import { randomIntFromInterval } from "src/utils";
import "./UserPfp.styles.scss";

export default function UserPfp({ children }: UserPfpProps) {
  const [randomInt] = useState(randomIntFromInterval(1, 5));
  return (
    <div className="userPfp" data-testid="userPfp">
      <img alt="randomPfp" src={`../../../assets/pfps/rando${randomInt}.svg`} />
    </div>
  );
}
