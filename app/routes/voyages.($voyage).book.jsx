import BookingSelector from '../components/BookingSelector'
import Calendar from '../components/Calendar'
import Itinerary from '../components/Itinerary'
import {json} from '@remix-run/node';
import { useLoaderData} from '@remix-run/react';
import { supabaseServer} from '~/utils/supabase';
import React, { useState } from 'react';

export const loader = async ({ params, request }) => {
  const {id} = params;
  const supabase = supabaseServer(request);

  const {data, error} = await supabase
    .from('voyage_dates')
    .select('start_time').eq('voyage_id', 2);

  if (error) {
    throw new Error(error.message);
  }

  const voyageResponse = await supabase
    .from('voyages')
    .select('name, price')
    .eq('id', 2)
    .single();

  if (voyageResponse.error) {
    throw new Error(error.message);
  }

  const { name: voyageName, price } = voyageResponse.data;
  console.log(voyageName, price);

  return json({ dates: data, voyageName, price });
}

const Book = () => {
  const {dates, voyageName, price} = useLoaderData();
  const [selectedDate, setSelectedDate] = useState(null);
  const [numGuests, setNumGuests] = useState(null);

  const selectableDates = dates.map(date => new Date(date.start_time));
  const excursions = [
    {id: 111, name: 'Hollywood Tour', price: 106},
    {id: 112, name: 'Beach Day', price: 193},
    {id: 113, name: 'Disneyland Trip', price: 187}
  ];
  const handleGuestsSubmit = (guests) => {
    setNumGuests(guests);
  };

  return (
    <>
     <Calendar selectableDates={selectableDates} setSelectedDate={setSelectedDate}/>
     {selectedDate &&<BookingSelector onSubmit={handleGuestsSubmit}/>}
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
        />
      )}
    </>
  )
}

export default Book
