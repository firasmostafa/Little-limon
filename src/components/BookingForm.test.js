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
    name: /on click/i
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
});

test("Reserve button is disabled when form is empty", () => {
  renderBookingForm();

  const button = screen.getByRole("button", {
    name: /on click/i
  });

  expect(button).toBeDisabled();
});

test("Reserve button becomes enabled with valid data", () => {
  renderBookingForm();

  fireEvent.change(
    screen.getByLabelText("Choose date"),
    {
      target: { value: "2026-08-20" }
    }
  );

  fireEvent.change(
    screen.getByLabelText("Choose time"),
    {
      target: { value: "19:00" }
    }
  );

  fireEvent.change(
    screen.getByLabelText("Number of guests"),
    {
      target: { value: "2" }
    }
  );

  const button = screen.getByRole("button", {
      name: /on click/i
  });

  expect(button).toBeEnabled();
});

test("HTML5 validation attributes are correctly applied", () => {
  renderBookingForm();

  const dateInput = screen.getByLabelText("Choose date");
  const timeInput = screen.getByLabelText("Choose time");
  const guestsInput =
    screen.getByLabelText("Number of guests");

  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute(
    "min",
    new Date().toISOString().split("T")[0]
  );

  expect(timeInput).toBeRequired();

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Guests value is invalid when it is below 1", () => {
  renderBookingForm();

  fireEvent.change(
    screen.getByLabelText("Choose date"),
    {
      target: { value: "2026-08-20" }
    }
  );

  fireEvent.change(
    screen.getByLabelText("Choose time"),
    {
      target: { value: "19:00" }
    }
  );

  const guestsInput =
    screen.getByLabelText("Number of guests");

  fireEvent.change(guestsInput, {
    target: { value: "0" }
  });

  expect(guestsInput).toBeInvalid();

  const button = screen.getByRole("button", {
      name: /on click/i
  });

  expect(button).toBeDisabled();
});

test("Guests value is invalid when it is above 10", () => {
  renderBookingForm();

  fireEvent.change(
    screen.getByLabelText("Choose date"),
    {
      target: { value: "2026-08-20" }
    }
  );

  fireEvent.change(
    screen.getByLabelText("Choose time"),
    {
      target: { value: "19:00" }
    }
  );

  const guestsInput =
    screen.getByLabelText("Number of guests");

  fireEvent.change(guestsInput, {
    target: { value: "11" }
  });

  expect(guestsInput).toBeInvalid();

  const button = screen.getByRole("button", {
     name: /on click/i
  });

  expect(button).toBeDisabled();
});

test("submitForm is called with valid booking data", () => {
  const { mockSubmitForm } = renderBookingForm();

  fireEvent.change(
    screen.getByLabelText("Choose date"),
    {
      target: { value: "2026-08-20" }
    }
  );

  fireEvent.change(
    screen.getByLabelText("Choose time"),
    {
      target: { value: "19:00" }
    }
  );

  fireEvent.change(
    screen.getByLabelText("Number of guests"),
    {
      target: { value: "2" }
    }
  );

  fireEvent.click(
    screen.getByRole("button", {
       name: /on click/i
    })
  );

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2026-08-20",
    time: "19:00",
    guests: 2,
    occasion: ""
  });
});