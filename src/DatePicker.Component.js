import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DatePickerComponent = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    

    function createData(date) {
        let startTime = date.toString().split(" ")[4];
        
        if (props.day) {
            if (props.sOe === 's') {
                let sTime = {
                  day: props.day,
                  start: startTime,
                  end: JSON.parse(localStorage.getItem(props.day)) !== null ? JSON.parse(localStorage.getItem(props.day)).end : ""
                };
                localStorage.setItem(props.day, JSON.stringify(sTime));
            } else {
                let eTime = {
                  day: props.day,
                  start:
                    JSON.parse(localStorage.getItem(props.day)) !== null
                      ? JSON.parse(localStorage.getItem(props.day)).start
                      : "",
                  end: startTime,
                };
                localStorage.setItem(props.day, JSON.stringify(eTime));
            }
            
        } else {
            alert("Day must be selected");
        }
        
      setStartDate(date);
    }
  
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => createData(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
};

export default DatePickerComponent;