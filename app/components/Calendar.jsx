import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const Calendar = ({selectableDates, setSelectedDateRange}) => {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const isSelectable = (date) => {
    return selectableDates.some(
      ({start, end}) => date >= start && date <= end
    );
  };

  const stripTime = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };

  const isSelectable = (date) => {
    const strippedDate = stripTime(date);
    return selectableDates.some(({ start, end }) => {
      const startDate = stripTime(start);
      const endDate = stripTime(end);
      return strippedDate >= startDate && strippedDate <= endDate;
    });
  };

  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDate={isSelectable}
      placeholderText="Select Starting Date"
      />

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowCalendar(false);
    const strippedDate = stripTime(date);
    const selectedRange = selectableDates.find(
      ({ start, end }) => strippedDate >= stripTime(start) && strippedDate <= stripTime(end)
    );
    if (selectedRange) {
      setSelectedDateRange(selectedRange);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-white mb-2 mt-3 text-2xl text-center tracking-wider">Select Your Journey Date</h1>
      <div className="flex  flex-col items-center relative">
        <div
          className="flex items-center border p-2 px-20 rounded shadow"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <span className="mr-2 text-white tracking-wider">{startDate ? startDate.toDateString() : " __/__/____ "}</span>
          <FaCalendarAlt className="w-4 h-4 text-white"/>
        </div>
        {showCalendar && (
          <div className="">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              filterDate={isSelectable}
              inline
              monthsShown={2}
              />
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar
