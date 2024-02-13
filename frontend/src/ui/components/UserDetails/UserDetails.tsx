import React from "react";
import "./UserDetails.styles.scss";

export default function UserDetails({
  details,
}: {
  details: { email: string; name: string; rating: number };
}) {
  return details ? (
    <div className="userDetails" data-testid="userDetails">
      <div>
        <div>Username:</div>
        <div>Email:</div>
        {(details?.rating === 0 || details?.rating) && <div>Rating:</div>}
      </div>
      <div>
        <div>{details?.name}</div>
        <div>{details?.email}</div>
        {(details?.rating === 0 || details?.rating) && (
          <div>{details?.rating}</div>
        )}
      </div>
    </div>
  ) : null;
}
