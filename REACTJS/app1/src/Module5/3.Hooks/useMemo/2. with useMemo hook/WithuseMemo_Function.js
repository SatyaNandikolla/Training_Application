import React, { useState, useMemo } from 'react'

export default function WithuseMemo_Function(props) {

    var todos = [ 
        { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5, "completed": true },
        { "id": 2, "title": "Stop drinking to much coffee", "description": "Coffee is evil!", "priority": 3, "completed": false },
    ]

    const [priority, setPriority] = useState(1)
    const [completed, setCompleted] = useState(false)

    const incrementPriority = () => {
        setPriority((prevState) => prevState + 1)
    }

    const toggleCompleted = () => {
        setCompleted((prevState) => !prevState)
    }

    const filterByPriority = useMemo(() => {
        console.log("In filterByPriority()")
        return todos.filter(todo => todo.priority === priority)
    }, [priority])

    const filterByCompleted = useMemo(() => {
        console.log("In filterByCompleted()")
        return todos.filter(todo => todo.completed === completed)
    }, [completed])

    return (
        <div>
            <button onClick={ incrementPriority }>Increment Priority</button>
            { filterByPriority.map(todo => <p key={todo.id}>{ JSON.stringify(todo) }</p>) }

            <br/><br/>
            <button onClick={ toggleCompleted }>Toggle Completed</button>
            { filterByCompleted.map(todo => <p key={todo.id}>{ JSON.stringify(todo) }</p>) }
        </div>
    )
}