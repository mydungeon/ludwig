import { useState } from "react";
import { data, data2 } from "src/testing/data/charts/histogram";
import { Histogram } from "src/ui/charts";
// ARTICLE: https://www.react-graph-gallery.com/histogram

type DatasetTransitionProps = {
  width: number;
  height: number;
};

export default function DatasetTransition({
  width,
  height,
}: DatasetTransitionProps) {
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedData, setSelectedData] = useState(data);
  const toggleButtons = [
    {
      buttonText: "Data 1",
      data: data,
    },
    {
      buttonText: "Data 2",
      data: data2,
    },
  ];
  return (
    <>
      <>
        {toggleButtons.map(({ buttonText, data }, index) => {
          let className = "button small";
          className =
            index === selectedButton ? `${className} selected` : className;
          return (
            <button
              className={className}
              key={index}
              onClick={() => {
                setSelectedButton(index);
                setSelectedData(data);
              }}
            >
              {buttonText}
            </button>
          );
        })}
      </>
      <Histogram width={width} height={height} data={selectedData} />
    </>
  );
}
