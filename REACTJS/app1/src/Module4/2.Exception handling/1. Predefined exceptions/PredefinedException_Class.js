import React, { Component } from 'react'

export default class PredefinedException_Class extends Component {
    render() {
        var todo = null;

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


