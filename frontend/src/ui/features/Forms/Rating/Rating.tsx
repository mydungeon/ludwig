import React, { useEffect, useState } from "react";
import { useAppSelector } from "src/redux/store";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import { useUpdateRatingMutation } from "src/redux/api/user.api";
import { Button, SliderInput, Wrapper } from "src/ui/components";
import { Icon } from "src/ui/components";
import { EMOJI_HASH } from "./Rating.constants";
import "./Rating.styles.scss";

export default function RatingForm() {
  const defaultRating = useAppSelector((state) => state.userState.user?.rating);
  const [rating, setRating] = useState(100);
  const [updateRating, { isLoading, isSuccess }] = useUpdateRatingMutation();
  const handleSetRating = (e: any) => setRating(Number(e.target.value));
  const onSubmit = () => updateRating({ rating });
  const icon = EMOJI_HASH[rating];
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;

  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.PROFILE);
  useEffect(() => {
    if (defaultRating === 0 || defaultRating) {
      setRating(defaultRating);
    }
  }, [defaultRating]);

  return (
    <Wrapper classNames="ratingForm" dataTestId="ratingForm">
      <SliderInput
        classNames={`slider-${rating}`}
        handleSetValue={handleSetRating}
        step={10}
        min={0}
        max={100}
        value={rating}
      >
        <Icon icon={icon} size="2xl" />
        <h3>{`${rating} %`}</h3>
      </SliderInput>
      <Button buttonText="Rate Ludwig" classNames="rating" onClick={onSubmit} />
    </Wrapper>
  );
}
