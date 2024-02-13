import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetUserQuery } from "src/redux/api/user.api";
import { UserProfile } from "src/ui/components";
import { BrandedFooterPage } from "src/ui/features/Pages";

export default function UserPage() {
  const [getUser, { isLoading, isSuccess }] = useLazyGetUserQuery();
  const { userId } = useParams();

  useEffect(() => {
    async function getUserAsync() {
      if (userId) {
        const user = await getUser(userId);
        console.log("user", user);
      }
    }
    getUserAsync();
  }, [getUser, userId]);
  return (
    <BrandedFooterPage pageTitle="Profile">
      <UserProfile />
    </BrandedFooterPage>
  );
}
