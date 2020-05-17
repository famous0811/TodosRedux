import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/reducer/todosreducer';

const mapDispatch={addTodo}

function Getlist({days,addTodo}) {
    const [todoText, setTodoText] = useState('')
    const onChange = e => setTodoText(e.target.value)
    function addlist(e) {
        e.preventDefault()
        if (!todoText.trim()) {
            return
        }   
        addTodo(todoText,days);
        setTodoText('');
    }
    return (
        <div>
            <form onSubmit={addlist}>
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
        </div>
    );
}

const mapStateToProps =(state) =>{
    return{
        days:state.DaysReducer
    }
}

export default connect(mapStateToProps,mapDispatch)(Getlist);