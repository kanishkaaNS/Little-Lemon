import { useState } from "react";

function BookingForm({ isLoggedIn, onRequireLogin }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!date || !time || !guests) {
      setError("Please fill in all required fields.");
      return;
    }

    if (guests < 1 || guests > 10) {
      setError("Number of guests must be between 1 and 10.");
      return;
    }

    // Login check
    if (!isLoggedIn) {
      onRequireLogin();
      return;
    }

    setError("");
    alert("Table booked successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select time</option>
        <option value="17:00">05:00 PM</option>
        <option value="18:00">06:00 PM</option>
        <option value="19:00">07:00 PM</option>
        <option value="20:00">08:00 PM</option>
        <option value="21:00">09:00 PM</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">No special occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
