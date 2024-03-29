import React from "react";
import ImageGridProps from "./ImageGrid.types";
import "./ImageGrid.styles.scss";

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="row" data-testid="imagegrid">
      {images.map((group, i) => {
        return (
          <div className="column" key={i}>
            {group.map(({ alt, fileName, to }, ii) => (
              <a key={ii} href={to} rel="noreferrer" target="_blank">
                <img
                  alt={alt}
                  src={`/assets/vendor-logos/${fileName}`}
                  style={{ width: "   100%" }}
                />
              </a>
            ))}
          </div>
        );
      })}
    </div>
  );
}
