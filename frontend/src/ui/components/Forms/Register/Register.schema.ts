import { object, ref, string } from "yup";

export const defaultValues = {
  email: "",
  name: "",
  password: "",
  passwordConfirm: "",
};

export const validationSchema = object().shape({
  email: string().required().email("Must be a valid email"),
  name: string().required().min(8),
  password: string().required().min(8),
  passwordConfirm: string().oneOf([ref("password")], "Passwords must match"),
});
