import { useState } from "react";

function BookingForm({ availableTimes ,updateTimes}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      date,
      time,
      guests,
      occasion
    });
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
  onChange={(event) => {
    const selectedDate = event.target.value;

    setDate(selectedDate);
    updateTimes(selectedDate);
  }}
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