import React, { useEffect, useState } from "react";
import { useUpdateMyRolesMutation } from "src/redux/api/user.api";
import MultiSelect from "src/ui/components/MultiSelect";
import Wrapper from "src/ui/components/Wrapper";
import FormFooter from "src/ui/components/Form/components/Footer";
import SiteLink from "src/ui/elements/SiteLink";
import { SubmitButton } from "src/ui/features/Buttons";
import { Redirect } from "src/hooks";
import { toggleOption } from "src/ui/components/MultiSelect/MultiSelect.utils";
import { MULTI_SELECT_OPTIONS } from "./Role.constants";
import { useAppSelector } from "src/redux/store";

export default function EditRoleForm() {
  const userRoles = useAppSelector((state) => state.userState.user?.roles);
  const [updateMyRoles, { isLoading, isSuccess }] = useUpdateMyRolesMutation();
  const [selected, setSelected] = useState<string[]>([]);
  const handleToggleOption = toggleOption({ callback: setSelected });

  useEffect(() => {
    userRoles && setSelected(userRoles);
  }, [userRoles]);

  function handleSubmit(event: any) {
    event.preventDefault();
    updateMyRoles({ roles: selected });
  }

  return (
    <Wrapper>
      <div>Edit Role</div>
      <form className="role" data-testid="role" onSubmit={handleSubmit}>
        <MultiSelect
          options={MULTI_SELECT_OPTIONS}
          selected={selected}
          toggleOption={handleToggleOption}
        />
        <FormFooter classNames="form">
          <>
            <SiteLink
              classNames="link"
              linkText="Cancel"
              destination={Redirect.PROFILE}
            />
          </>
          <>
            <SubmitButton buttonText="Update" classNames="updateUser" />
          </>
        </FormFooter>
      </form>
    </Wrapper>
  );
}
