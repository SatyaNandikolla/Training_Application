import React from 'react'

export default function WithFragments_Function() {
    var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };

    return (
        <React.Fragment>
            <td>id - { todo.id }</td>
            <td>title - { todo.title }</td>
            <td>description - { todo.description }</td>
            <td>priority - { todo.priority }</td>
        </React.Fragment>
    )
}

 
