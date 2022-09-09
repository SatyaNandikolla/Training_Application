import React from "react";
export default function NoChanges_Function() {
    var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 }
    function incrementPriority() {
        todo.priority++
        console.log(todo.priority)
    }
    function decrementPriority() {
        todo.priority--
        console.log(todo.priority)
    }
    return (
        <div>
            <h2>Not Reflecting Data Changes</h2>
            <p>id-{todo.id}</p>
            <p>title-{todo.title}</p>
            <p>description-{todo.description}</p>
            <p>priority-{todo.priority}</p>
            <button onClick={incrementPriority}>Increment Priority</button>
            <button onClick={decrementPriority}>decrementPriority Priority</button>
        </div>

    )
}