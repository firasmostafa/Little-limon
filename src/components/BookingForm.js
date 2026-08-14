import { useState } from "react";

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const bookingData = {
      date,
      time,
      guests,
      occasion
    };

    console.log("Booking submitted:", bookingData);

    setSubmitted(true);
  }

  function handleDateChange(event) {
    const selectedDate = event.target.value;

    setDate(selectedDate);

    updateTimes(selectedDate);

    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="booking-success">
        <h2>Booking Confirmed!</h2>

        <p>
          Your table has been reserved successfully.
        </p>

        <p>
          <strong>Date:</strong> {date}
        </p>

        <p>
          <strong>Time:</strong> {time}
        </p>

        <p>
          <strong>Guests:</strong> {guests}
        </p>

        {occasion && (
          <p>
            <strong>Occasion:</strong> {occasion}
          </p>
        )}

        <button
          type="button"
          onClick={() => setSubmitted(false)}
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

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
          setGuests(event.target.value)
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

      <button type="submit">
        Reserve a Table
      </button>
    </form>
  );
}

export default BookingForm;