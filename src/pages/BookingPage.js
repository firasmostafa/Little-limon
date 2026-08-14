import { useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState(
    fetchAPI(new Date())
  );

  function updateTimes(date) {
    const times = fetchAPI(date);

    setAvailableTimes(times);
  }

  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      console.log("Booking submitted successfully!");
    }
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
          submitForm={submitForm}
        />

      </section>
    </main>
  );
}

export default BookingPage;