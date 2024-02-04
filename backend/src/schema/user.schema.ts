import { array, object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({ required_error: "Name is required" }),
    email: string({ required_error: "Email is required" }).email(
      "Invalid email"
    ),
    password: string({ required_error: "Password is required" })
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: string({ required_error: "Please confirm your password" }),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  }),
});

export const updateUserSchema = object({
  body: object({
    name: string({ required_error: "Name is required" }),
    email: string({ required_error: "Email is required" }).email(
      "Invalid email"
    ),
  }),
});

export const updateUserRolesSchema = object({
  body: object({
    roles: array(string()).nonempty(),
  }),
});

export const loginUserSchema = object({
  body: object({
    email: string({ required_error: "Email is required" }).email(
      "Invalid email or password"
    ),
    password: string({ required_error: "Password is required" }).min(
      8,
      "Invalid email or password"
    ),
  }),
});

export const changePasswordSchema = object({
  body: object({
    currentPassword: string({
      required_error: "Current password is required",
    }).min(8, "Current password is invalid"),
    password: string({ required_error: "New password is required" }).min(
      8,
      "New password is invalid"
    ),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
export type UpdateUserInput = TypeOf<typeof updateUserSchema>["body"];
export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
export type ChangePasswordInput = TypeOf<typeof changePasswordSchema>["body"];
