import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
export default interface ModalHeaderProps {
  children?: JSX.Element[] | JSX.Element;
  handleClick?: () => void;
  icon?: IconProp;
  size?: SizeProp;
}
