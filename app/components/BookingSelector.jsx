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

  const getImagePath = (roomName) => {
    const roomImageMap = {
      'Balcony Cabin': 'balconycabin.png',
      'Inside Cabin': 'insidecabin.png',
      'Junior Suite': 'juniorsuite.png',
      'Ocean View Cabin': 'oceanviewcabin.png',
      'Penthouse Suite': 'penthousesuite.png',
      'Royal Suite': 'royalsuite.png',
      'Studio': 'studio.png',
      'Suite': 'suite.png',
      'Accessible Cabin': 'accessibleCabin09.jpg'
    };
    return `/rooms/${roomImageMap[roomName]}`;
  };


  return (
    <div className="p-4 mt-4 animate-slide-up bg-white/50 rounded-lg">
      <h2 className="text-2xl mb-2 tracking-wider text-center">Guests and Rooms</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Enter number of guests"
          className="border p-2 rounded w-full"
          min="1"
          required
        />
        <div className="mt-4 tracking-wider">
          <p>Number of Rooms:</p>
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
              className="border p-2 rounded w-full"
              required
            >
              <option value="" disabled>Select Room Type</option>
              {rooms.map((room) => (
                <option key={room.name} value={room.name}>
                  {room.name} - ${room.price}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className="mt-2 bg-primary text-white p-2 rounded">Submit</button>
      </form>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <h3 className="text-lg font-semibold col-span-full">Available Rooms</h3>
        {rooms.map((room) => (
          <div key={room.name} className="border rounded shadow p-4 bg-white flex flex-col">
            <h4 className="text-md font-semibold">{room.name}</h4>
            <p className="text-sm flex-grow">{room.description}</p>
            <p className="text-sm font-semibold">${room.price}</p>
            <div className="w-full overflow-hidden mt-auto">
            <img src={getImagePath(room.name)} alt="available room"
              className="object-cover h-full w-full"/>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSelector;