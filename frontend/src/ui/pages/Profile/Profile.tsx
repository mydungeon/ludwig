import React from "react";
import { ChatWindow, UserProfile } from "src/ui/components";
import { BrandedFooterPage } from "src/ui/features/Pages";
import { useAppSelector } from "src/redux/store";

export default function ProfilePage() {
  const details = useAppSelector((state) => state.profileState.profile);
  return (
    <BrandedFooterPage pageTitle="Profile">
      <>
        {details && <UserProfile details={details} />}
        {details && (
          <ChatWindow receiverId={details._id} receiverName={details.name} />
        )}
      </>
    </BrandedFooterPage>
  );
}
