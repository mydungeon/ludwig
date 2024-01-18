import React from "react";
import { Link } from "react-router-dom";
import { AvatarProps } from "./Avatar.types";
import { trimUserName } from "./Avatar.utils";
import "./Avatar.styles.scss";

export default function Avatar({ classNames, to, userName }: AvatarProps) {
  if (!userName) return null;
  const userNameFirstInitial = trimUserName(userName);
  const className = classNames ? `avatar ${classNames}` : "avatar";
  return (
    <Link className={className} data-testid="avatar" to={to || ""}>
      <div>{userNameFirstInitial}</div>
    </Link>
  );
}
