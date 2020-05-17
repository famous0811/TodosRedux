import {createSlice} from '@reduxjs/toolkit';
const date=new Date();
const daySlice = createSlice({
    name: 'day',
    initialState:{
        month:date.getMonth()+1,
        day:date.getDate()
    },
    reducers:{
        SetDays:{
            reducer(state, action){
                return action.payload;
            },
            prepare(month, day){
                return { payload: {month,day} }
            }
        }
        
    }
});

export const {SetDays}=daySlice.actions;

export default daySlice.reducer;