import React, { useContext } from 'react'
import TodoContext5 from './TodoContext5';

export default function ContextProviderChanges_Function(props) {

    var { todo, incrementPriority, decrementPriority } = useContext(TodoContext5)

    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>description - { todo.description }</p>
            <p>priority - { todo.priority }</p>
            <button onClick={incrementPriority}>Increment Priority</button>
            <button onClick={decrementPriority}>Decrement Priority</button>
        </div>
    )
}
