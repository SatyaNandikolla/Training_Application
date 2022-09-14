import React, { useContext } from 'react'
import TodoContext1 from './TodoContext1';

export default function WithoutConsumerTag_Function(props) {

    var todo = useContext(TodoContext1)

    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>description - { todo.description }</p>
            <p>priority - { todo.priority }</p>
        </div>
    )
}
