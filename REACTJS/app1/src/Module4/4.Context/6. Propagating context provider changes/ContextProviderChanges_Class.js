import React, { Component } from 'react'
import TodoContext5 from './TodoContext5';

export default class ContextProviderChanges_Class extends Component {

    static contextType = TodoContext5

    render() {

        var { todo, incrementPriority, decrementPriority } = this.context

        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { todo.id }</p>
                <p>title - { todo.title }d</p>
                <p>description - { todo.description }</p>
                <p>priority - { todo.priority }</p>
                <button onClick={incrementPriority}>Increment Priority</button>
                <button onClick={decrementPriority}>Decrement Priority</button>
            </div>
        )
    }
}
