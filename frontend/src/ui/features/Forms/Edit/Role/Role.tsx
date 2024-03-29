import React, { useEffect, useState } from "react";
import { useUpdateMyRolesMutation } from "src/redux/api/profile.api";
import { useAppSelector } from "src/redux/store";
import { Redirect } from "src/hooks";
import { FormFooter, MultiSelect, SiteLink, Wrapper } from "src/ui/components";
import { toggleOption } from "src/ui/components/MultiSelect/MultiSelect.utils";
import { SubmitButton } from "src/ui/features/Buttons";
import { MULTI_SELECT_OPTIONS } from "./Role.constants";
import "./Role.styles.scss";

export default function EditRoleForm() {
  const userRoles = useAppSelector(
    (state) => state.profileState.profile?.roles
  );
  const [updateMyRoles] = useUpdateMyRolesMutation();
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
    <Wrapper classNames="editRole" dataTestId="editRoleForm">
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
