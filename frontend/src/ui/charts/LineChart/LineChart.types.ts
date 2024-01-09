export type DataPoint = { x: number; y: number };

export interface LineChartProps {
  width: number;
  height: number;
  data: DataPoint[];
}
