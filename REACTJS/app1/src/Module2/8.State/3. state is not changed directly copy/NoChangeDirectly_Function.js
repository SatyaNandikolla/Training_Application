import React, { useState } from 'react'

export default function NoChangeDirectly_Function() {
        
    var [ todo ] = useState({ id: 1, title: "Learn JSF", description: "Finish this article", priority: 3 })

    function incrementPriority() {
        todo.priority = todo.priority + 1
    }

    function decrementPriority() {
        todo.priority = todo.priority - 1
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

