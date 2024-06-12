import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateFilter.scss';  // 引入自定義樣式

const DateFilter = ({ setDateRange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDateRange({ start, end });
  };

  return (
    <div className="date-filter">
      <h3>選擇日期區間</h3>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="yyyy/MM/dd"
        minDate={new Date()}
        isClearable
        placeholderText="選擇日期區間"
        className="custom-datepicker"  // 添加自定義class
      />
    </div>
  );
};

export default DateFilter;

