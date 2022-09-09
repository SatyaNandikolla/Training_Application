import React, { useContext } from 'react'
import TodoContext2 from './TodoContext2';

export default function ContextProvider_Function(props) {

    var todo = useContext(TodoContext2)

    function showTodo() {
        console.log(todo);
    }

    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>description - { todo.description }</p>
            <p>priority - { todo.priority }</p>
            <button onClick={showTodo}>Show Todo</button>
        </div>
    )
}
