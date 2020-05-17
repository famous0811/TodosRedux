import React from 'react';
import {connect} from 'react-redux';
import {filter,setVisibilityFilter} from '../store/reducer/filterreducer';
import {createSelector} from '@reduxjs/toolkit';
import styled from 'styled-components';

const Leight =styled.div`
    display: ${(props) => props.leight ? "block" : "none"};
`;

const Contents=styled.div`
border: ${(props) =>props.nowfilter ? '1px solid pink' : "none"};
&:hover{
        border:solid 1px pink;
    }
`;

const mapDispatch ={setVisibilityFilter};

function Fotter({setVisibilityFilter,nowfilter,leight}) {
    function Download(){
        var lists=document.getElementById("Lists");
        var text="";
        if(!lists.childElementCount)
            return;
        
        for(var j=0;j<lists.childElementCount;j++){
            var value=lists.childNodes[j];
            text+=value.childNodes[0].textContent+"   "+value.childNodes[1].textContent+",\n";
        }
        var element = document.createElement('a'); 
        element.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(text)); 
        element.download="Todos.txt";
        element.click();
    }
    return (
        <div>
            <Leight leight={leight}>{leight} items left</Leight> 
            <Contents nowfilter={nowfilter===filter.SHOW_ALL} onClick={()=>{setVisibilityFilter(filter.SHOW_ALL)}}>all</Contents>
            <Contents nowfilter={nowfilter===filter.SHOW_COMPLETED} onClick={()=>{setVisibilityFilter(filter.SHOW_COMPLETED)}}>clear</Contents>
            <Contents nowfilter={nowfilter===filter.SHOW_ACTIVE} onClick={()=>{setVisibilityFilter(filter.SHOW_ACTIVE)}}>active</Contents>
            <Contents onClick={()=>{setVisibilityFilter(filter.ALL_CLAER)}}>clear completed</Contents>
            <Contents onClick={Download}>Download</Contents>
        </div>
    );
}

const selectTodos = state => state.Todosreducer;
const selectFilter = state => state.Filterruder;
const selectdays=state =>state.DaysReducer;

const selectsize=createSelector(
    [selectTodos,selectFilter,selectdays],
    (todos,nowfilter,days)=>{
        switch(nowfilter){
            case filter.SHOW_ALL:
                return todos.filter(t =>days.month===t.month && days.day===t.day).length;
            case filter.SHOW_COMPLETED:
                return todos.filter(t => t.completed && days.month===t.month && days.day===t.day).length;
            case filter.SHOW_ACTIVE:
                return todos.filter(t => !t.completed&& days.month===t.month && days.day===t.day).length;
            default:
                return 0;
        }
    }
)

const commdispatch=function(state,nowstate){
    return{
        nowfilter:state.Filterruder,
        leight:selectsize(state)
    }
}

export default connect(commdispatch,mapDispatch)(Fotter);