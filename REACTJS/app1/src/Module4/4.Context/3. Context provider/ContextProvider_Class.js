import React, { Component } from 'react'
import TodoContext2 from './TodoContext2';

export default class ContextProvider_Class extends Component {

    static contextType = TodoContext2
    
    constructor(props) {
        super(props)

        this.showTodo = this.showTodo.bind(this)
    }

    showTodo() {
        console.log(this.context);
    }

    render() {

        var todo = this.context

        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { todo.id }</p>
                <p>title - { todo.title }</p>
                <p>description - { todo.description }</p>
                <p>priority - { todo.priority }</p>
                <button onClick={this.showTodo}>Show Todo</button>
            </div>
        )
    }
}
