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
import "./Metrics.styles.scss";
import { useDimensions } from "src/hooks";

export default function Metrics() {
  const [elementRef, height, width] = useDimensions();
  return (
    <Page classNames="Metrics" pageTitle="Metrics">
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
