import React, { Component } from 'react'

export default class Redirecting_Class_New extends Component {
    
    render() {
        console.log("rendered Todo_Class_New")
        var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };

        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { todo.id }</p>
                <p>title - { todo.title }</p>
                <p>description - { todo.description }</p>
                <p>priority - { todo.priority }</p>
            </div>
        )
    }
}

