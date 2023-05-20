import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker({ selected, onChange }) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat="MM/dd/yyyy"
      placeholderText="Select a due date"
    />
  );
}

export default CustomDatePicker;
