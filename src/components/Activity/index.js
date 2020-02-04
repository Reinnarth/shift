import React, { useState } from "react";
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css'

export default function Activity(props) {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    console.log(date);
    setDate(date);
  };
  const onClick = () => {
    console.log(date);
  };


  return (
    <div>
      <Calendar
        value={date}
        onChange={onChange}
      />
      <button onClick={onClick}>chekerino</button>
    </div>
  );
}
