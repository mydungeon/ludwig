import { object, string } from "yup";
import {
  INPUT_NAME,
  REQUIRED,
  INVALID,
  DOES_NOT_MATCH,
} from "./Form.constants";

const { NAME, EMAIL, PASSWORD } = INPUT_NAME;

export type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const defaultValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export function validate(values: any) {
  const { email, name, password, passwordConfirm } = values;
  const errors: any = {};
  if (!email) {
    errors.email = REQUIRED(EMAIL);
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)) {
    errors.email = INVALID(EMAIL);
  }
  if (!name) {
    errors.name = REQUIRED(NAME);
  }
  if (!password) {
    errors.password = REQUIRED(PASSWORD);
  }
  if (password !== passwordConfirm) {
    errors.passwordConfirm = DOES_NOT_MATCH(PASSWORD);
  }
  return errors;
}

export const validationSchema = object().shape({
  name: string().required(),
  email: string().required(),
  password: string().required(),
  passwordConfirm: string().required(),
});
