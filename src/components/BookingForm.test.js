import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import {
  initializeTimes,
  updateTimes
} from "../pages/BookingPage";

test("Renders the BookingForm button", () => {
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

  const button = screen.getByText("Reserve a Table");

  expect(button).toBeInTheDocument();
});

test("initializeTimes returns available times", () => {
  const times = initializeTimes();

  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ]);

  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns available times for a selected date", () => {
  const initialState = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];

  const action = {
    type: "UPDATE_TIMES",
    date: "2026-08-20"
  };

  const result = updateTimes(initialState, action);

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ]);

  expect(result.length).toBeGreaterThan(0);
});