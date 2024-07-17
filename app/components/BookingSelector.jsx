import React, { useState } from 'react';

const BookingSelector = ({ onSubmit }) => {
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(guests);
  };

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-lg font-semibold mb-2">Number of Guests</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Enter number of guests"
          className="border p-2 rounded"
          min="1"
          required
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default BookingSelector;