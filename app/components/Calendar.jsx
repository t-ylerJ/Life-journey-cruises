import React, { useState } from 'react';
import DatePicker from 'react-DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import Itinerary from './Itinerary';

const Calendar = ({selectableDates}) => {

  const [startDate, setStartDate] = useState(null);
  console.log(selectableDates);
  const isSelectable = (date) => {
    return selectableDates.some(
      (selectableDate) => selectableDate.toDateString() === date.toDateString()
    );
  };

 /* return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDate={isSelectable}
      placeholderText="Select Starting Date"
      />
  ) */

 const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowCalendar(false); // Hide calendar after date selection
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Select Starting Date</h2>
      <div className="relative">
        <button
          className="flex items-center border p-2 rounded shadow"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <span className="mr-2">{startDate ? startDate.toDateString() : "Select Date"}</span>
          <FaCalendarAlt />
        </button>
        {showCalendar && (
          <div className="absolute top-full mt-2 bg-white border rounded shadow z-10">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              filterDate={isSelectable}
              inline
            />
          </div>
        )}
      </div>
      {startDate && <Itinerary selectedDate={startDate} />}
    </div>
  );
};

export default Calendar
