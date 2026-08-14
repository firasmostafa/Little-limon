import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../pages/BookingPage";

test("Renders the BookingForm heading", () => {
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];

  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const headingElement = screen.getByText("Reserve a Table");

  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the expected available times", () => {
  const times = initializeTimes();

  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ]);
});

test("updateTimes returns the current state for an unknown action", () => {
  const currentState = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];

  const action = {
    type: "UNKNOWN"
  };

  const result = updateTimes(currentState, action);

  expect(result).toEqual(currentState);
});