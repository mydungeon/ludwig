import React from "react";
import FooterProps from "./Footer.types";
import "./Footer.styles.scss";
import { Icon, Logo, Tooltip } from "src/ui/components";
import { getCopyright } from "./Footer.utils";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { TooltipDirection } from "../Tooltip/Tooltip.types";

export default function Footer({ children }: FooterProps) {
  return (
    <div className="footer" data-testid="footer">
      <div>
        <Logo classNames="small" />
      </div>
      <div>
        <Tooltip
          direction={TooltipDirection.TOP}
          message="View my source code on Github"
        >
          <a
            href="https://github.com/mydungeon/ludwig"
            rel="noreferrer"
            target="_blank"
          >
            <Icon icon={faCode} />
          </a>
        </Tooltip>
      </div>
      <div>
        <span>{getCopyright()}</span>
      </div>
    </div>
  );
}
