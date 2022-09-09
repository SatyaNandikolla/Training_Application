import React, { useState, useEffect } from 'react'

export default function Updating_Function(props) {
    
    var [ todo, setTodo ] = useState({ id: 1, title: "Learn JSF", description: "Finish this article", priority: 3 })
    
    // componentDidMount()
    useEffect(() => {
        setInterval(() => {
            setTodo((prevTodo) => ({ ...prevTodo, "priority": prevTodo.priority + 1 }))
        }, 2000)
    }, [])

    // componentDidUpdate()
    useEffect(() => {
        console.log("Component Updated")
    })

    // componentDidUpdate(prevProps, prevState)
    useEffect(() => {
        console.log("Priority Updated")
    }, [todo.priority])

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

