import React, { useState } from "react";
import "./DatePicker.css";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedDate((prevDate) => ({ ...prevDate, [name]: value }));
  };

  return (
    <div className="date-of-birth-container">
      <span className="date-of-birth-container1">Date of Birth:</span>
      <div className="date-of-birth-container2">
        <div className="dateofbirth-select">
          <select
            name="day"
            className="date-of-birth-container2-select"
            value={selectedDate.day}
            onChange={handleChange}
          >
            <option value="" disabled>Day</option>
            {days.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="dateofbirth-select">
          <select
            name="month"
            value={selectedDate.month}
            className="date-of-birth-container2-select"
            onChange={handleChange}
          >
            <option value="" disabled>Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>

        </div>
        <div className="dateofbirth-select">
          <select
            name="year"
            value={selectedDate.year}
            onChange={handleChange}
            className="date-of-birth-container2-select"
          >
            <option value="" disabled>Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default DatePicker;
