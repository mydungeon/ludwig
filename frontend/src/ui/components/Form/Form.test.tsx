import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

test("loads and displays Form component", async () => {
<<<<<<< HEAD
  render(<Form defaultValues={{}} onSubmit={() => console.log("test")} />);
=======
  render(<Form />);
>>>>>>> 6e7f044 (massive amount of  boilerplate)
  expect(screen.getByTestId("form")).toBeTruthy();
});
