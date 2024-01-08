import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";

export function filterKeys(columns: any, filter: string[]) {
  return Object.keys(columns).filter((key) => {
    return filter.indexOf(key) > -1;
  });
}

export function setTooltipDirection(index: number, length: number) {
  return index === 0
    ? TooltipDirection.RIGHT
    : index < length - 1
    ? TooltipDirection.TOP
    : TooltipDirection.LEFT;
}
