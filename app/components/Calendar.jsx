import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const Calendar = ({selectableDates, setSelectedDate}) => {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

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

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowCalendar(false);
    setSelectedDate(date); // Hide calendar after date selection
  };

  return (
    <div className="p-4">
      <h1 className="text-white font-serif mb-2 mt-3 text-2xl text-center tracking-wider">Select Starting Date</h1>
      <div className="flex justify-center">
      <div className="relative">
        <button
          className="flex items-center border p-2 px-20 rounded shadow"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <span className="mr-2 text-gray-400 font-serif tracking-wider">{startDate ? startDate.toDateString() : " __/__/____ "}</span>
          <FaCalendarAlt className="w-4 h-4 text-gray-400"/>
        </button>
        {showCalendar && (
          <div className="absolute top-full mt-2 bg-white rounded shadow z-10 w-full flex justify-center">
            <div className="w-auto bg-gray-50 rounded-lg p-2.5">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              filterDate={isSelectable}
              inline
              className="font-serif text-gray-800"
              />
              </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Calendar
