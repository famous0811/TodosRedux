import {createSlice} from '@reduxjs/toolkit';

let nextTodoId=0;

const todoSlices = createSlice({
    name: 'todos',
    initialState:[],
    reducers:{
         addTodo:{
            reducer(state, action) {
                const { id, text,month, day} = action.payload
                state.push({ id, text,month, day, completed: false})
              },
              prepare(text,days) {
                return { payload: { text, id: nextTodoId++,...days} }
              }
         },
         clearTodo(state,action) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
               todo.completed = !todo.completed
            }
         },
         deleteTodo(state,action) {
            return state.filter(item=>item.id!==action.payload);
         },
         Alldelete(state, action){
            state.splice(0,state.length);
         }
    }
});

const {actions,reducer}=todoSlices;

export const {addTodo,clearTodo,deleteTodo,Alldelete}=actions;

export default reducer;