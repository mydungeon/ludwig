<<<<<<< HEAD
enum FORM_NAMES {
  REGISTER = "Register",
}

enum INPUT_NAME {
  NAME = "name",
  EMAIL = "email address",
  PASSWORD = "password",
}
=======
const INPUT_NAME = {
  NAME: "name",
  EMAIL: "email address",
  PASSWORD: "password",
};
>>>>>>> b91cc1a (register form in progress)
const REQUIRED = (inputName: string) => `${inputName} is required`;
const INVALID = (inputName: string) => `Invalid ${inputName}`;
const DOES_NOT_MATCH = (inputName: string) =>
  `Confirm ${inputName} does not match`;
<<<<<<< HEAD
export { FORM_NAMES, INPUT_NAME, REQUIRED, INVALID, DOES_NOT_MATCH };
=======
export { INPUT_NAME, REQUIRED, INVALID, DOES_NOT_MATCH };
>>>>>>> b91cc1a (register form in progress)
