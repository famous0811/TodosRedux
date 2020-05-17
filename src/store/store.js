import {combineReducers,configureStore} from '@reduxjs/toolkit';
import Todosreducer from './reducer/todosreducer.js';
import Filterruder from './reducer/filterreducer.js';
import DaysReducer from './reducer/dayreducer.js';
const rootreudcer=combineReducers({
    Todosreducer,
    Filterruder,
    DaysReducer
});

const store=configureStore({
    reducer:rootreudcer
})

export default store;