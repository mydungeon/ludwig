import { InferType, object, ref, string } from "yup";

export const defaultValues = {
  currentPassword: "",
  password: "",
  passwordConfirm: "",
};

export const validationSchema = object().shape({
  currentPassword: string().required().min(8),
  password: string().required().min(8),
  passwordConfirm: string().oneOf([ref("password")], "Passwords must match"),
});

export type ChangePasswordPayloadType = InferType<typeof validationSchema>;
