import React, { Component } from 'react'

export default class Basic_Class extends Component {
    
    render() {
        var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };

        return (
            <div>
                <center>
                <h2>Class Component</h2>
                <p>id - { todo.id }</p>
                <p>title - { todo.title }</p>
                <p>description - { todo.description }</p>
                <p>priority - { todo.priority }</p>
                </center>
            </div>
        )
    }
}
