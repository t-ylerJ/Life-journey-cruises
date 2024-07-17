import React, { useState } from 'react';

const BookingSelector = ({ onSubmit, rooms }) => {
  const [guests, setGuests] = useState('');
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomCount, setRoomCount] = useState(1);

  const handleRoomChange = (index, value) => {
    const newSelectedRooms = [...selectedRooms];
    newSelectedRooms[index] = value;
    setSelectedRooms(newSelectedRooms);
  };

  const handleRoomCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setRoomCount(count);
    setSelectedRooms(Array(count).fill(''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({guests, selectedRooms});
  };

  return (
    <div className="p-4 border rounded shadow mt-4">
      <h2 className="text-lg font-semibold mb-2">Number of Guests and Rooms</h2>
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
        <div className="mt-4">
          <label>Number of Rooms:</label>
          <input
            type="number"
            value={roomCount}
            onChange={handleRoomCountChange}
            className="border p-2 rounded"
            min="1"
            required
          />
        </div>
        {Array.from({ length: roomCount }).map((_, index) => (
          <div key={index} className="mt-2">
            <label>Room {index + 1}:</label>
            <select
              value={selectedRooms[index] || ''}
              onChange={(e) => handleRoomChange(index, e.target.value)}
              className="border p-2 rounded"
              required
            >
              <option value="" disabled>Select Room Type</option>
              {rooms.map((room) => (
                <option key={room.name} value={room.name}>
                  {room.name} - {room.description} (${room.price})
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <h3 className="text-lg font-semibold mb-2 col-span-full">Available Rooms</h3>
        {rooms.map((room) => (
          <div key={room.name} className="border rounded shadow p-4">
            <h4 className="text-md font-semibold">{room.name}</h4>
            <p className="text-sm">{room.description}</p>
            <p className="text-sm font-semibold">${room.price}</p>
            <img src="https://www.sunway.ie/cruise/images/ships/Silver-Ray/Master-Suite.jpg" alt="available room"
              className="mt-2 w-full rounded"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSelector;