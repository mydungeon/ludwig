import { InferType, object, string, array } from "yup";

export const defaultValues = {
  roles: ["users"],
};

export const validationSchema = object().shape({
  roles: array(string()),
});

export type UpdateRolePayloadType = InferType<typeof validationSchema>;
