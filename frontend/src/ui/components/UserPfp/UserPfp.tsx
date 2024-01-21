import React, { useState } from "react";
import UserPfpProps from "./UserPfp.types";
import "./UserPfp.styles.scss";
import { randomIntFromInterval } from "src/utils";

export default function UserPfp({ children }: UserPfpProps) {
  const [randomInt, setRandomInt] = useState(randomIntFromInterval(1, 5));
  return (
    <div className="userPfp" data-testid="userPfp">
      <img alt="randomPfp" src={`../../../assets/pfps/rando${randomInt}.svg`} />
    </div>
  );
}
