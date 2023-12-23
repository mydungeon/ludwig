import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export default interface IconProps {
  classNames?: string;
  icon: IconProp;
  handleClick?: () => void;
  size?: SizeProp | undefined;
}
