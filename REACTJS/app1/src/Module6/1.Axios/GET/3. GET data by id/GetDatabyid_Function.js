import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetDatabyid_Function(props) {
    var [ todo, setTodo ] = useState({})

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos', { params: { id: 1 } })
        .then((response) => {
            setTodo( response.data[0] )
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    var { id, title, completed } = todo
    return (
        <div>
            <h3>Functional component</h3>
            <p>id - { id }</p>
            <p>title - { title }</p>
            <p>completed - { completed+"" }</p>
        </div>
    )
}

