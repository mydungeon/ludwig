import React from "react";
import { Link } from "react-router-dom";
import { AvatarProps } from "./Avatar.types";
import { trimUserName } from "./Avatar.utils";
import "./Avatar.styles.scss";

export default function Avatar({ destination, userName }: AvatarProps) {
  const userNameFirstInitial = trimUserName(userName);
  return (
    <Link className="avatar" data-testid="avatar" to={destination}>
      <div>{userNameFirstInitial}</div>
    </Link>
  );
}
