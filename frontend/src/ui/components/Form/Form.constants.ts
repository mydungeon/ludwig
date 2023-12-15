<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e50453 (style inputs, add preloader in progress)
enum FORM_NAMES {
  REGISTER = "Register",
}

enum INPUT_NAME {
  NAME = "name",
  EMAIL = "email address",
  PASSWORD = "password",
}
<<<<<<< HEAD
=======
const INPUT_NAME = {
  NAME: "name",
  EMAIL: "email address",
  PASSWORD: "password",
};
>>>>>>> b91cc1a (register form in progress)
=======
>>>>>>> 8e50453 (style inputs, add preloader in progress)
const REQUIRED = (inputName: string) => `${inputName} is required`;
const INVALID = (inputName: string) => `Invalid ${inputName}`;
const DOES_NOT_MATCH = (inputName: string) =>
  `Confirm ${inputName} does not match`;
<<<<<<< HEAD
<<<<<<< HEAD
export { FORM_NAMES, INPUT_NAME, REQUIRED, INVALID, DOES_NOT_MATCH };
=======
export { INPUT_NAME, REQUIRED, INVALID, DOES_NOT_MATCH };
>>>>>>> b91cc1a (register form in progress)
=======
export { FORM_NAMES, INPUT_NAME, REQUIRED, INVALID, DOES_NOT_MATCH };
>>>>>>> 8e50453 (style inputs, add preloader in progress)
