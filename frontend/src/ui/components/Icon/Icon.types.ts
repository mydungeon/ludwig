import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export default interface IconProps {
  icon: IconProp;
  handleClick?: () => void;
  size?: SizeProp | undefined;
}
