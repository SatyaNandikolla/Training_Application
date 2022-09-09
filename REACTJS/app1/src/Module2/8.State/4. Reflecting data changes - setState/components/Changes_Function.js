import React, { useState } from 'react'

export default function Changes_Function() {
        
    var [ todo, setTodo ] = useState({ id: 1, title: "Learn JSF", description: "Finish this article", priority: 5 })

    function incrementPriority() {
        setTodo((prevState) => ({ ...prevState, "priority": prevState.priority + 1 }))
    }

    function decrementPriority() {
        setTodo((prevState) => ({ ...prevState, "priority": prevState.priority - 1 }))
    }
    
    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>description - { todo.description }</p>
            <p>priority - { todo.priority }</p>
            <button onClick={ incrementPriority }>Increment Priority</button>
            <button onClick={ decrementPriority }>Decrement Priority</button>
        </div>
    )
}

