import { InferType, object, string } from "yup";

export const defaultValues = {
  email: "",
  name: "",
};

export const validationSchema = object().shape({
  email: string().required().email("Must be a valid email"),
  name: string().required().min(8),
});

export type UpdatePayloadType = InferType<typeof validationSchema>;
