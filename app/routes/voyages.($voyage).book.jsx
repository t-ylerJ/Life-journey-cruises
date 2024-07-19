import BookingSelector from '../components/BookingSelector'
import Calendar from '../components/Calendar'
import Itinerary from '../components/Itinerary'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { supabaseServer } from '~/utils/supabase'
import { useState, useEffect } from 'react'
import redirectCookie from '../utils/redirectCookie'

export const loader = async ({ params, request }) => {
  const id = params.voyage
  const supabase = supabaseServer(request)

  const { data, error } = await supabase
    .from('voyage_dates')
    .select('start_time, end_time')
    .eq('voyage_id', id)

  if (error) {
    throw new Error(error.message)
  }

  const voyageResponse = await supabase
    .from('voyages')
    .select('name, price')
    .eq('id', id)
    .single()

  if (voyageResponse.error) {
    throw new Error(error.message)
  }

  const { name: voyageName, price } = voyageResponse.data

  const { data: rooms, error: roomError } = await supabase
    .from('guest_rooms')
    .select('*')

  if (roomError) {
    throw new Error(roomError.message)
  }

  return json(
    { dates: data, voyageName, price, rooms, voyageId: id },
    {
      headers: {
        'Set-Cookie': await redirectCookie.serialize(
          new URL(request.url).pathname
        ),
      },
    }
  )
}

const Book = () => {
  const { dates, voyageName, price, rooms, voyageId } = useLoaderData()
  const [selectedDateRange, setSelectedDateRange] = useState(null)
  const [numGuests, setNumGuests] = useState(null)
  const [selectedRooms, setSelectedRooms] = useState(null)
  const [excursions, setExcursions] = useState([])

  useEffect(() => {
    const storedExcursions = JSON.parse(localStorage.getItem('excursions'))
    if (storedExcursions) {
      setExcursions(storedExcursions)
    }
  }, [])

  const selectableDates = dates.map((date) => ({
    start: new Date(date.start_time),
    end: new Date(date.end_time),
  }))

  //console.log(selectableDates);
  /*const excursions = [
    {id: 111, name: 'Hollywood Tour', price: 106},
    {id: 112, name: 'Beach Day', price: 193},
    {id: 113, name: 'Disneyland Trip', price: 187}
  ];*/
  const handleGuestsSubmit = ({ guests, selectedRooms }) => {
    setNumGuests(guests)
    setSelectedRooms(selectedRooms)

    const roomDetails = selectedRooms.map((room) => {
      const roomInfo = rooms.find((r) => r.name === room)
      return {
        id: roomInfo.id,
        name: roomInfo.name,
        price: roomInfo.price,
      }
    })

    const bookingDetails = {
      guestNumber: guests,
      selectedRooms: roomDetails,
      voyageId: voyageId,
      voyageName: voyageName,
      voyagePrice: price,
      exursions: excursions,
    }

    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails))
  }

  return (
    <div className="bg-cover bg-center min-h-screen bg-[url('/bookBG_2.svg')]">
      <Calendar
        selectableDates={selectableDates}
        setSelectedDateRange={setSelectedDateRange}
      />
      <div className="flex flex-col lg:flex-row p-6 w-full">
        {selectedDateRange && !numGuests && (
          <div className="w-full lg:w-1/3 animate-slide-up">
            <Itinerary
              voyageName={voyageName}
              price={price}
              selectedDate={selectedDateRange.start.toDateString()}
              endDate={selectedDateRange.end.toDateString()}
              excursions={excursions}
            />
          </div>
        )}
        {selectedDateRange && numGuests && (
          <div className="w-full lg:w-1/3">
            <Itinerary
              voyageName={voyageName}
              price={price}
              selectedDate={selectedDateRange.start.toDateString()}
              endDate={selectedDateRange.end.toDateString()}
              excursions={excursions}
              numGuests={numGuests}
              selectedRooms={selectedRooms}
              roomDetails={rooms}
            />
          </div>
        )}
        <div className="w-full lg:w-1/4 animate-slide-up"> </div>
        <div className="w-full lg:w-5/12 animate-slide-up">
          {selectedDateRange && (
            <BookingSelector rooms={rooms} onSubmit={handleGuestsSubmit} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Book
