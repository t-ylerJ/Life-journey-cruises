import BookingSelector from '../components/BookingSelector'
import Calendar from '../components/Calendar'
import Itinerary from '../components/Itinerary'
import {json} from '@remix-run/node';
import { useLoaderData} from '@remix-run/react';
import { supabaseServer} from '~/utils/supabase';
import React, { useState } from 'react';

export const loader = async ({ params, request }) => {
  const id = params.voyage;
  const supabase = supabaseServer(request);

  const {data, error} = await supabase
    .from('voyage_dates')
    .select('start_time').eq('voyage_id', id);

  if (error) {
    throw new Error(error.message);
  }

  const voyageResponse = await supabase
    .from('voyages')
    .select('name, price')
    .eq('id', id)
    .single();

  if (voyageResponse.error) {
    throw new Error(error.message);
  }

  const { name: voyageName, price } = voyageResponse.data;

  const {data: rooms, error: roomError}= await supabase
  .from('guest_rooms')
  .select('*');

  if (roomError) {
    throw new Error(roomError.message);
  }

  return json({ dates: data, voyageName, price, rooms, voyageId: id });
}

const Book = () => {
  const {dates, voyageName, price, rooms, voyageId} = useLoaderData();
  const [selectedDate, setSelectedDate] = useState(null);
  const [numGuests, setNumGuests] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(null);

  const selectableDates = dates.map(date => new Date(date.start_time));
  const excursions = [
    {id: 111, name: 'Hollywood Tour', price: 106},
    {id: 112, name: 'Beach Day', price: 193},
    {id: 113, name: 'Disneyland Trip', price: 187}
  ];
  const handleGuestsSubmit = ({guests, selectedRooms}) => {
    setNumGuests(guests);
    setSelectedRooms(selectedRooms);

    const roomDetails = selectedRooms.map(room => {
      const roomInfo = rooms.find(r => r.name === room);
      return {
        id: roomInfo.id,
        name: roomInfo.name,
        price: roomInfo.price,
      };
    });

    const bookingDetails = {
      'guestNumber': guests,
      'selectedRooms': roomDetails,
      'voyageId': voyageId,
      'voyageName': voyageName,
      'voyagePrice': price,
      'exursions': excursions,
    };

    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
  };

  return (
    <>
     <Calendar selectableDates={selectableDates} setSelectedDate={setSelectedDate}/>
     {selectedDate &&<BookingSelector rooms={rooms} onSubmit={handleGuestsSubmit}/>}
     {selectedDate && !numGuests &&
      <Itinerary
      voyageName={voyageName}
      price={price}
      selectedDate={selectedDate.toDateString()}
      excursions={excursions}/>}
      {selectedDate && numGuests && (
        <Itinerary
          voyageName={voyageName}
          price={price}
          selectedDate={selectedDate.toDateString()}
          excursions={excursions}
          numGuests={numGuests}
          selectedRooms={selectedRooms}
          roomDetails={rooms}
        />
      )}
    </>
  )
}

export default Book
