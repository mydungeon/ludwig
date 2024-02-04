import { InferType, object, number } from "yup";

export const defaultValues = {
  rating: null,
};

export const validationSchema = object().shape({
  rating: number(),
});

export type RatingPayloadType = InferType<typeof validationSchema>;
