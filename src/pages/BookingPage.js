import BookingForm from "../components/BookingForm";

function BookingPage({ isLoggedIn, onRequireLogin }) {
  return (
    <main className="booking-page">
      <div className="booking-card">
        <h1>Reserve a Table</h1>
        <p>Please fill out the form to make a reservation.</p>

        <BookingForm
          isLoggedIn={isLoggedIn}
          onRequireLogin={onRequireLogin}
        />
      </div>
    </main>
  );
}

export default BookingPage;
