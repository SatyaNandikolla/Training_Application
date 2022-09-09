import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GetDataonButtonClick_Todo from './GetDataonButtonClick_Todo'

export default function GetDataonButtonClick_Function(props) {
    var [ todos, setTodos ] = useState([])

    function getTodoList() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            setTodos( response.data )
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <h2>TodoList - Functional Component</h2>
            <button onClick={getTodoList}>Get Todo List</button>
            {
                todos.map( todo => <GetDataonButtonClick_Todo key={ todo.id } todo={ todo } /> )
            }
        </div>
    )
}

