import { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateFilter.css";

const DateFilter = ({ setDateRange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = useCallback(
    (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      setDateRange({ start, end });
    },
    [setDateRange]
  );

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
        className="custom-datepicker"
      />
    </div>
  );
};

export default DateFilter;
