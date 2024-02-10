import React from "react";
import { faCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import { Link } from "react-router-dom";
import "./Footer.styles.scss";

export default function FooterIcons() {
  return (
    <div className="footerIcons">
      <div>
        <Tooltip
          direction={TooltipDirection.TOP}
          message="Made with the latest tech"
        >
          <Link to="/tech">
            <Icon icon={faRocket} />
          </Link>
        </Tooltip>
      </div>
      <div>
        <Tooltip direction={TooltipDirection.TOP} message="My source code">
          <a
            href="https://github.com/mydungeon/ludwig"
            rel="noreferrer"
            target="_blank"
          >
            <Icon icon={faCode} />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
