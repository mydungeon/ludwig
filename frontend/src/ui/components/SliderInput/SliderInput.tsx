import React, { useState } from "react";
import {
  faFaceDizzy,
  faFaceFrownOpen,
  faFaceGrimace,
  faFaceGrinBeam,
  faFaceGrinBeamSweat,
  faFaceGrinStars,
  faFaceLaugh,
  faFaceTired,
  faMeh,
  faSadCry,
  faSadTear,
} from "@fortawesome/free-solid-svg-icons";
import SliderInputProps from "./SliderInput.types";
import { Icon } from "src/ui/components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./SliderInput.styles.scss";

interface IEmojiHash {
  [key: number]: IconProp;
}

export default function SliderInput({ step, min, max }: SliderInputProps) {
  const [value, setValue] = useState(100);
  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / max}% 100%` };
  };
  const emojiHash: IEmojiHash = {
    0: faFaceDizzy,
    10: faFaceTired,
    20: faSadCry,
    30: faSadTear,
    40: faFaceFrownOpen,
    50: faMeh,
    60: faFaceGrimace,
    70: faFaceGrinBeamSweat,
    80: faFaceGrinBeam,
    90: faFaceLaugh,
    100: faFaceGrinStars,
  };
  const icon = emojiHash[value];

  return (
    <>
      <Icon icon={icon} size="2xl" />
      <h3>{`${value} %`}</h3>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={(e: any) => setValue(e.target.value)}
        style={getBackgroundSize()}
        value={value}
      />
    </>
  );
}
