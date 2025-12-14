import React from 'react';

function Book() {
  return (
    <section className="book-section">
      <h1>Book Your Session</h1>
      <p>
        Ready to connect with a professional interpreter? Please fill out the form below to book your session.
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdPZwD5YpwS1TJh2cJDW6i_OUtXXWBqcNSOJq61BBYMSoTy3A/viewform?embedded=true"
        width="640"
        height="783"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Booking Form"
      >
        Loading…
      </iframe>
    </section>
  );
}

export default Book;
