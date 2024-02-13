import React from "react";
import { UserProfile } from "src/ui/components";
import { BrandedFooterPage } from "src/ui/features/Pages";
import { useAppSelector } from "src/redux/store";

export default function ProfilePage() {
  const details = useAppSelector((state) => state.profileState.profile);
  return (
    <BrandedFooterPage pageTitle="Profile">
      {details ? <UserProfile details={details} /> : <div>loading...</div>}
    </BrandedFooterPage>
  );
}
