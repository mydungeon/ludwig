import React, {
  LegacyRef,
  MutableRefObject,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Page from "src/ui/components/Page";
import { LineChart } from "src/ui/charts";
import { lineChartData } from "src/ui/charts/data/lineChart";
import { useDimensions } from "src/hooks";
import "./Metrics.styles.scss";

export default function Metrics() {
  const [elementRef, height, width] = useDimensions();
  return (
    <Page classNames="metrics" pageTitle="Metrics">
      <div ref={elementRef as LegacyRef<HTMLDivElement>}>
        <LineChart
          data={lineChartData}
          height={height as number}
          width={width as number}
        />
      </div>
    </Page>
  );
}
