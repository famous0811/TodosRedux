import {createSlice} from '@reduxjs/toolkit';

export const filter={
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    ALL_CLAER:'ALL_CLAER',
}

const filterSlice =createSlice({
    name:"filterview",
    initialState:filter.SHOW_ALL,
    reducers:{
        setVisibilityFilter(state, action) {
            // console.log(action.payload);
            return action.payload
          }
    }
});

export const { setVisibilityFilter } = filterSlice.actions

export default filterSlice.reducer