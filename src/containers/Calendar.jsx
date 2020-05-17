import React from 'react';
import Calendarcomponents from '../components/Clalendar';
import {connect} from 'react-redux';
import {SetDays} from '../store/reducer/dayreducer';

function Calendar({SetDays}) {

    function Updays(time){
        // console.log(SetDays);
        SetDays(time.getMonth()+1,time.getDate());
    }
    return (
        <div>
            <Calendarcomponents Updays={Updays}></Calendarcomponents>
        </div>
    );
}
const mapDispatch={SetDays};

export default connect(null,mapDispatch)(Calendar);