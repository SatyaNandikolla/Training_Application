import React, { Component } from 'react'
import TodoContext1 from './TodoContext1';

export default class WithoutConsumerTag_Class extends Component {

    static contextType = TodoContext1
    
    render() {

        var todo = this.context

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
