import React from 'react';

const Itinerary = ({ voyageName, price, selectedDate, excursions, numGuests }) => {
  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-lg font-semibold mb-2">Itinerary Details</h2>
      <p><strong>Voyage Name:</strong> {voyageName}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Start Date:</strong> {selectedDate}</p>
      <ul><strong>Excursions</strong>{excursions.map(item => <li key={item.id}>{item.name}: ${item.price}</li>)}</ul>
      {numGuests && <p><strong>Number of Guests:</strong> {numGuests}</p>}
    </div>
  );
};


export default Itinerary