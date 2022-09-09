import React, { useState } from 'react'
import WithCounter2 from './WithCounter2'

function Todo3_Function(props) {
    
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

export default WithCounter2(Todo3_Function, 5)
