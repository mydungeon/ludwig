import { PlacesType } from "react-tooltip";

export default interface TooltipProps {
  children?: JSX.Element[] | JSX.Element;
  id: string;
  message: string | JSX.Element | JSX.Element[];
  place?: PlacesType;
}
