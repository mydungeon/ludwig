import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";

export function setTooltipDirection(index: number, length: number) {
  return index === 0
    ? TooltipDirection.RIGHT
    : index < length - 1
    ? TooltipDirection.TOP
    : TooltipDirection.LEFT;
}
