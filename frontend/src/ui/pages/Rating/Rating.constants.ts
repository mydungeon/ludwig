import { IconProp } from "@fortawesome/fontawesome-svg-core";
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

interface IEmojiHash {
  [key: number]: IconProp;
}

export const EMOJI_HASH: IEmojiHash = {
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
