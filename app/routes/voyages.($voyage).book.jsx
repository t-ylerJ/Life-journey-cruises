import BookingSelector from '../components/BookingSelector'
import Calendar from '../components/Calendar'
import Itinerary from '../components/Itinerary'
import {json} from '@remix-run/node';
import { useLoaderData} from '@remix-run/react';
import { supabaseServer} from '~/utils/supabase';

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
    .eq('id', 2);

  if (voyageResponse.error) {
    throw new Error(error.message);
  }

  const { name: voyageName, price } = voyageResponse.data;

  return json({ dates: data, voyageName, price });
}

const Book = () => {
  const {dates, voyageName, price} = useLoaderData();
  const selectableDates = dates.map(date => new Date(date.start_time));
  console.log(selectableDates[0].toDateString());
  return (
    <>
      <Itinerary voyageName={voyageName} price={price}/>
     <Calendar selectableDates={selectableDates}/>
      <BookingSelector />
    </>
  )
}

export default Book
