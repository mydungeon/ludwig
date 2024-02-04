import React, { useState } from "react";
import { useAppSelector } from "src/redux/store";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import { useUpdateRatingMutation } from "src/redux/api/user.api";
import { Button, SliderInput, Wrapper } from "src/ui/components";
import { Icon } from "src/ui/components";
import { EMOJI_HASH } from "./Rating.constants";
import "./Rating.styles.scss";

export default function RatingForm() {
  const defaultValues = useAppSelector((state) => state.userState.user?.rating);
  const [value, setValue] = useState(100);
  const icon = EMOJI_HASH[value];
  const [updateRating, { isLoading, isSuccess }] = useUpdateRatingMutation();
  // const isPreloaderSuccess = isLoading && !isSuccess;
  // const isRedirectSuccess = !isLoading && isSuccess;
  const handleSetValue = (e: any) => setValue(e.target.value);
  const onSubmit = () => updateRating({ rating: value });

  // usePreloader(isPreloaderSuccess);
  // useRedirect(isRedirectSuccess, Redirect.PROFILE);

  return (
    <Wrapper classNames="ratingForm" dataTestId="ratingForm">
      <SliderInput
        classNames={`slider-${value}`}
        handleSetValue={handleSetValue}
        step={10}
        min={0}
        max={100}
        value={value}
      >
        <Icon icon={icon} size="2xl" />
        <h3>{`${value} %`}</h3>
      </SliderInput>
      <Button buttonText="Rate Ludwig" classNames="rating" onClick={onSubmit} />
    </Wrapper>
  );
}
