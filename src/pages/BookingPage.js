import { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState(
    fetchAPI(new Date())
  );

  const [selectedDate, setSelectedDate] = useState(
    new Date()
  );

  useEffect(() => {
    const times = fetchAPI(selectedDate);
    setAvailableTimes(times);
  }, [selectedDate]);

  function updateTimes(date) {
    setSelectedDate(new Date(date));
  }

  function submitForm(formData) {
    return submitAPI(formData);
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