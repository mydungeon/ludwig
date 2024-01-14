import React from "react";
import "./Feedback.styles.scss";
import { PageWithFooter } from "src/ui/features/Pages";
import { SliderInput } from "src/ui/components";

export default function FeedbackPage() {
  return (
    <PageWithFooter classNames="feedback" pageTitle="Rate Ludwig">
      <SliderInput step={10} min={0} max={100} />
    </PageWithFooter>
  );
}
