import React, { useState } from 'react';
import DatePicker from 'react-DatePicker';
import 'react-datepicker/dist/react-datepicker.css';

const selectabeDates = [
  new Date('2025-06-01'),
  new Date('2025-06-06'),
  new Date('2025-06-11'),
  new Date('2025-06-22'),
  new Date('2025-07-03'),
  new Date('2025-07-08'),
  new Date('2025-07-13'),
  new Date('2025-07-18'),
  new Date('2025-07-23'),
  new Date('2025-07-30'),
  new Date('2025-08-06'),
  new Date('2025-08-11'),
  new Date('2025-08-16'),
  new Date('2025-08-27'),
  new Date('2025-09-07'),
  new Date('2025-09-12'),
  new Date('2025-09-17'),
  new Date('2025-09-22'),
  new Date('2025-09-27'),
  new Date('2025-10-04'),
];

const isSelectable = (date: Date)



const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  return <div>Calendar</div>
}

export default Calendar
