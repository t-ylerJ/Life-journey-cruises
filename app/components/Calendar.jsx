import React, { useState } from 'react';
import DatePicker from 'react-DatePicker';
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
    </div>
  );
};

export default Calendar
