import React from 'react'

function Todo_Function() {
    var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };

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

export default Todo_Function
