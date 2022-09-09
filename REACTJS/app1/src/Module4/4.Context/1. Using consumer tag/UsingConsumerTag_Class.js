import React, { Component } from 'react'
import TodoContext from './TodoContext';

export default class UsingConsumerTag_Class extends Component {
    
    render() {

        return (
            <TodoContext.Consumer>
                {todo => ( 
                    <div>
                        <h2>Class Component</h2>
                        <p>id - { todo.id }</p>
                        <p>title - { todo.title }</p>
                        <p>description - { todo.description }</p>
                        <p>priority - { todo.priority }</p>
                    </div>
                )}
            </TodoContext.Consumer>
        )
    }
}
