import React, { useState } from "react";
import { Icon } from "src/ui/components";
import { PageWithFooter } from "src/ui/features/Pages";
import { SliderInput } from "src/ui/components";
import { EMOJI_HASH } from "./Feedback.constants";
import "./Feedback.styles.scss";

export default function FeedbackPage() {
  const [value, setValue] = useState(100);
  const handleSetValue = (e: any) => setValue(e.target.value);
  const icon = EMOJI_HASH[value];

  return (
    <PageWithFooter classNames="feedback" pageTitle="Rate Ludwig">
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
    </PageWithFooter>
  );
}
