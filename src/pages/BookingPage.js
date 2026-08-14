import { useState } from "react";
import BookingForm from "../components/BookingForm";

function fetchAPI(date) {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];
}

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState(
    fetchAPI(new Date())
  );

  function updateTimes(date) {
    const times = fetchAPI(date);

    setAvailableTimes(times);
  }

  return (
    <main className="main">
      <section className="booking-section">

        <h1>Reserve a Table</h1>

        <p>
          Book your table at Little Lemon and enjoy
          a delicious Mediterranean dining experience.
        </p>

        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        />

      </section>
    </main>
  );
}

export default BookingPage;