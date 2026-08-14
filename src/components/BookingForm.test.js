import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";

import BookingForm from "./BookingForm";

import {
  initializeTimes,
  updateTimes
} from "../pages/BookingPage";

const availableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00"
];

function renderBookingForm() {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  return {
    mockDispatch,
    mockSubmitForm
  };
}

test("Renders the BookingForm button", () => {
  renderBookingForm();

  const button = screen.getByRole("button", {
    name: /reserve a table/i
  });

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

test("Reserve button is disabled when the form is empty", () => {
  renderBookingForm();

  const button = screen.getByRole("button", {
    name: /reserve a table/i
  });

  expect(button).toBeDisabled();
});

test("Reserve button becomes enabled with valid data", () => {
  renderBookingForm();

  const dateInput = screen.getByLabelText("Choose date");
  const timeInput = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(dateInput, {
    target: { value: "2026-08-20" }
  });

  fireEvent.change(timeInput, {
    target: { value: "19:00" }
  });

  fireEvent.change(guestsInput, {
    target: { value: "2" }
  });

  const button = screen.getByRole("button", {
    name: /reserve a table/i
  });

  expect(button).toBeEnabled();
});

test("submitForm is called with valid booking data", () => {
  const { mockSubmitForm } = renderBookingForm();

  const dateInput = screen.getByLabelText("Choose date");
  const timeInput = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(dateInput, {
    target: { value: "2026-08-20" }
  });

  fireEvent.change(timeInput, {
    target: { value: "19:00" }
  });

  fireEvent.change(guestsInput, {
    target: { value: "2" }
  });

  const button = screen.getByRole("button", {
    name: /reserve a table/i
  });

  fireEvent.click(button);

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2026-08-20",
    time: "19:00",
    guests: 2,
    occasion: ""
  });
});