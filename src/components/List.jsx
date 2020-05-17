import React from 'react';
import styled from 'styled-components';

const Contents =styled.li`
    text-decoration:${(props)=>props.completed ? 'line-through' : 'none'};
    margin-right:10px;
`;
const Listcontent =styled.div`
        width:100px;
        display: flex;
        justify-content:space-around;
        flex-direction: row;
`;

function List({onclick,test,completed,text,month, day}) {
    return (
            <Listcontent className="todos_list">
                <Contents onClick={onclick} completed={completed}>
                {text}
                </Contents>
                <div>
                    {month}/{day}
                </div>
                <div onClick={test} style={{color: 'red'}}>X</div>
            </Listcontent>
    );
}

export default List;