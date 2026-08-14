function BookingPage() {
  return (
    <main className="main">
      <section className="booking-section">
        <h1>Reserve a Table</h1>

        <p>
          Book your table at Little Lemon and enjoy
          a delicious Mediterranean dining experience.
        </p>

        <form className="booking-form">
          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            name="date"
            required
          />

          <label htmlFor="time">Choose time</label>
          <select id="time" name="time" required>
            <option value="">Select a time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            placeholder="1"
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion">
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>

          <button type="submit">
            Reserve a Table
          </button>
        </form>
      </section>
    </main>
  );
}

export default BookingPage;