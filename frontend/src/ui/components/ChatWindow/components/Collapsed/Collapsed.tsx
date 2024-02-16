import React from "react";
import { OpenChatIcon } from "src/ui/features/Icons";

export default function CollapsedChatWindow({
  handleCollapse,
}: {
  handleCollapse: () => void;
}) {
  return (
    <div className="chatWindow min">
      <div className="chatFooter">
        <div className="chatFooterRight">
          <OpenChatIcon callback={handleCollapse} />
        </div>
      </div>
    </div>
  );
}
