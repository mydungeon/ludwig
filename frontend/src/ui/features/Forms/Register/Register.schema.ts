import { InferType, object, ref, string } from "yup";

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

export type RegisterPayloadType = InferType<typeof validationSchema>;

// export const validationSchema = object({
//   email: string()
//     .min(1, "Email address is required")
//     .email("Email Address is invalid"),
//   password: string()
//     .min(1, "Password is required")
//     .min(8, "Password must be more than 8 characters")
//     .max(32, "Password must be less than 32 characters"),
// });
