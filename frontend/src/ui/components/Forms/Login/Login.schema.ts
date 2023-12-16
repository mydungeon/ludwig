import { object, string, InferType } from "yup";

export const defaultValues = {
  email: "",
  password: "",
};

export const validationSchema = object().shape({
  email: string().required().email("Must be a valid email"),
  password: string().required().min(8),
});

export type LoginPayloadType = InferType<typeof validationSchema>;
