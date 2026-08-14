import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date));
  }

  return state;
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>
    </main>
  );
}

export default BookingPage;
