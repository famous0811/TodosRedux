import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from '@reduxjs/toolkit';
import {clearTodo,Alldelete,deleteTodo} from '../store/reducer/todosreducer';
import {filter,setVisibilityFilter} from '../store/reducer/filterreducer';
import List from '../components/List';

const selectTodos = state => state.Todosreducer;
const selectFilter = state => state.Filterruder;
const selectdays=state =>state.DaysReducer;

const SetViewTodoset=createSelector(
    [selectTodos,selectFilter,selectdays],
    (todos,nowfilter,days)=>{
        switch(nowfilter){
            case filter.SHOW_ALL:
                return todos.filter(t =>days.month===t.month && days.day===t.day)
            case filter.SHOW_COMPLETED:
                return todos.filter(t => t.completed && days.month===t.month && days.day===t.day)
            case filter.SHOW_ACTIVE:
                return todos.filter(t => !t.completed&& days.month===t.month && days.day===t.day)
            case filter.ALL_CLAER:
                return [];
            default:
                throw new Error('Unknown filter: '+nowfilter);
        }
    }
)

function TodosList({todos,nowfilter,clearTodo,Alldelete,deleteTodo,setVisibilityFilter}) {
    if(nowfilter===filter.ALL_CLAER)
    {   
        Alldelete([]);
        setVisibilityFilter(filter.SHOW_ALL);
    }
    return (
        <ul id="Lists">
            {todos.map(todo=>(
            <List key={todo.id} {...todo} onclick={()=>clearTodo(todo.id)} test={()=>deleteTodo(todo.id)}/>
            ))}
        </ul>
    );
}
const mapStateToProps=(state)=>{
    return{
        nowfilter:state.Filterruder, 
        todos:SetViewTodoset(state),
    }
}
const mapDispatch={clearTodo,Alldelete,deleteTodo,setVisibilityFilter};

export default connect(mapStateToProps,mapDispatch)(TodosList);