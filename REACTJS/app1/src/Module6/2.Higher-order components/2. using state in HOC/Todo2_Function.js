import React, { useState } from 'react'
import WithCounter1 from './WithCounter1'

function Todo2_Function(props) {
    
    var [ todo, setTodo ] = useState({ "id": 1, "title": "Learn JSF", "description": "Finish this article" })
    const { count, incrementCount, decrementCount } = props

    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>description - { todo.description }</p>
            <p>priority - { count }</p>
            <button onClick={ incrementCount }>Increment Priority</button>
            <button onClick={ decrementCount }>Decrement Priority</button>
        </div>
    )
}

export default WithCounter1(Todo2_Function)
