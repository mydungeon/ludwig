import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "src/redux/types";
import { useLazyGetUserQuery } from "src/redux/api/user.api";
import { ChatWindow, UserProfile } from "src/ui/components";
import { BrandedFooterPage } from "src/ui/features/Pages";

export default function UserPage() {
  const [getUser, { isSuccess }] = useLazyGetUserQuery();
  const [details, setDetails] = useState<IUser>();
  const { userId } = useParams();

  useEffect(() => {
    async function getUserAsync() {
      if (userId) {
        const user = await getUser(userId);
        if (isSuccess) {
          setDetails(user.data);
        }
      }
    }
    getUserAsync();
  }, [getUser, isSuccess, userId]);

  return details ? (
    <BrandedFooterPage pageTitle={details.name}>
      <>
        <UserProfile details={details} />
        <ChatWindow receiverId={details._id} receiverName={details.name} />
      </>
    </BrandedFooterPage>
  ) : null;
}
