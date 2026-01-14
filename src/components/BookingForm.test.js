import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders booking form fields", () => {
  render(<BookingForm />);

  expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
  expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
  expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
});

test("shows error message when submitting empty form", () => {
  render(<BookingForm />);

  fireEvent.click(screen.getByRole("button", {
    name: /make your reservation/i
  }));

  expect(
    screen.getByText("Please fill in all required fields.")
  ).toBeInTheDocument();
});
