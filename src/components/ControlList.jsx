import React from 'react';
import Fotter from '../containers/Fotter';
import Getlist from '../containers/Getlist';
import TodoList from '../containers/TodosList';
import Clalendar from '../containers/Calendar';

function ControlList(props) {
    return (
        <div>
            <h1>Todos</h1>
            <Clalendar></Clalendar>
            <Getlist></Getlist>
            <TodoList></TodoList>
            <Fotter></Fotter>
        </div>
    );
}

export default ControlList;