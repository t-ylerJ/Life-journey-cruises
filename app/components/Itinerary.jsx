import React from 'react';

const Itinerary = ({ voyageName, price, selectedDate, excursions, numGuests, selectedRooms, roomDetails, endDate }) => {
  return (
    <div className="p-4 mt-4 mr-4 animate-slide-up text-center">
      <h2 className="text-2xl text-white mb-2 tracking-wider">Itinerary Details</h2>
      <p className="text-white">________________________________________________________</p>
      <p className="text-white text-lg tracking-wider p-2"><strong>Voyage Name:</strong> {voyageName}</p>
      <p className="text-white text-lg tracking-wider p-2"><strong>Voyage Price:</strong> ${price}</p>
      <p className="text-white text-lg tracking-wider p-2"><strong>Start Date:</strong> {selectedDate}</p>
      <p className="text-white text-lg tracking-wider p-2"><strong>End Date:</strong> {endDate}</p>
      <div className="text-white text-lg tracking-wider p-2">
        <strong>Excursions:</strong>
        <div>
        {excursions.map(item =>
        <li key={item.id} className="tracking-wider p-2">{item.name}: ${item.price}</li>
        )}
        </div>
      </div>
      {numGuests && <p className="text-white text-lg tracking-wider p-2"><strong>Number of Guests:</strong> {numGuests}</p>}
      {selectedRooms && (
        <div className="text-white text-lg tracking-wider p-2">
          <strong>Selected Rooms:</strong>
          <div>
            {selectedRooms.map((room, index) => {
              const roomDetail = roomDetails.find(r => r.name === room);
              return (
              <li key={index} className="tracking-wider p-2">
                {room} - ${roomDetail.price}
                <img src="https://www.sunway.ie/cruise/images/ships/Silver-Ray/Master-Suite.jpg" alt="booked room"
                className="mt-2" />
              </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};


export default Itinerary
