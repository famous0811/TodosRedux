import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Clalendar({Updays}) {
    const [Dated,setdate] =useState(new Date());
    const onchange = date=>setdate(date);

    return (
        <Calendar
          className={"calender"}
          onChange={onchange}
          onClickDay={Updays}
          value={Dated}/>
    );
}

export default Clalendar;