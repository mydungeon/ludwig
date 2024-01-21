export enum TooltipDirection {
  TOP_LEFT = "topLeft",
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}
export default interface TooltipProps {
  children?: JSX.Element[] | JSX.Element;
  classNames?: string;
  delay?: number;
  direction: TooltipDirection;
  message: string;
}
