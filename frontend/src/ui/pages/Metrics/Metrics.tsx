import React, { LegacyRef } from "react";
import { lineChartData } from "src/testing/data/charts/lineChart";
import { useDimensions } from "src/hooks";
import { Page } from "src/ui/components";
import { DatasetTransition as Histogram, LineChart } from "src/ui/charts";
import "./Metrics.styles.scss";

export default function MetricsPage() {
  const [elementRef, height, width] = useDimensions();
  return (
    <Page classNames="metrics" pageTitle="Metrics">
      <h3>User Activity</h3>
      <div ref={elementRef as LegacyRef<HTMLDivElement>}>
        <LineChart
          data={lineChartData}
          height={height as number}
          width={width as number}
        />
      </div>
      <h3>User Ratings</h3>
      <Histogram width={width as number} height={height as number} />
    </Page>
  );
}
