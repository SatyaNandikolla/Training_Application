import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GetDataonLoad_Todo from './GetDataonLoad_Todo'

export default function GetDataonLoad_Function(props) {
    var [ todos, setTodos ] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            setTodos( response.data )
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <div>
            <h2>TodoList - Functional Component</h2>
            {
                todos.map( todo => <GetDataonLoad_Todo key={ todo.id } todo={ todo } /> )
            }
        </div>
    )
}

