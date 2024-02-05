import { useState } from "react";
import { data, data2 } from "src/testing/data/charts/histogram";
import { Histogram } from "src/ui/charts";
const BUTTONS_HEIGHT = 50;
// ARTICLE: https://www.react-graph-gallery.com/histogram

type DatasetTransitionProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "0px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

export default function DatasetTransition({
  width,
  height,
}: DatasetTransitionProps) {
  const [selectedData, setSelectedData] = useState(data);

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <button style={buttonStyle} onClick={() => setSelectedData(data)}>
          Data 1
        </button>
        <button style={buttonStyle} onClick={() => setSelectedData(data2)}>
          Data 2
        </button>
      </div>
      <Histogram
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
}
