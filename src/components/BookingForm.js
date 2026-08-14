import { useState } from "react";

function BookingForm({
  availableTimes,
  dispatch,
  submitForm
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  function handleDateChange(event) {
    const selectedDate = event.target.value;

    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!date || !time || !guests) {
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion
    };

    submitForm(formData);
  }

  const isFormValid =
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 10;

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">
        Choose date
      </label>

      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        min={new Date().toISOString().split("T")[0]}
        required
      />

      <label htmlFor="res-time">
        Choose time
      </label>

      <select
        id="res-time"
        value={time}
        onChange={(event) =>
          setTime(event.target.value)
        }
        required
      >
        <option value="">
          Select a time
        </option>

        {availableTimes.map((availableTime) => (
          <option
            key={availableTime}
            value={availableTime}
          >
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">
        Number of guests
      </label>

      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(event) =>
          setGuests(Number(event.target.value))
        }
        required
      />

      <label htmlFor="occasion">
        Occasion
      </label>

      <select
        id="occasion"
        value={occasion}
        onChange={(event) =>
          setOccasion(event.target.value)
        }
      >
        <option value="">
          Select an occasion
        </option>

        <option value="birthday">
          Birthday
        </option>

        <option value="anniversary">
          Anniversary
        </option>
      </select>

      <button
        type="submit"
        disabled={!isFormValid}
      >
        Reserve a Table
      </button>
    </form>
  );
}

export default BookingForm;