import React, { useState, useEffect } from 'react'

export default function UsingsetTimeout_Function(props) {
    
    var [ todo, setTodo ] = useState({ id: 1, title: "Learn JSF", description: "Finish this article", priority: 3 })
    
    // componentDidMount()
    useEffect(() => {
        setTimeout(() => {
            console.log("State Change Timeout")
            setTodo((prevTodo) => ({ ...prevTodo, "title": "Learn React" }))
        }, 2000)
    }, [])

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
