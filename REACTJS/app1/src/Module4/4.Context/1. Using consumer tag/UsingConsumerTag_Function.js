import React from 'react'
import TodoContext from './TodoContext';

export default function UsingConsumerTag_Function(props) {

    return (
        <TodoContext.Consumer>
            {todo => ( 
                <div>
                    <h2>Functional Component</h2>
                    <p>id - { todo.id }</p>
                    <p>title - { todo.title }</p>
                    <p>description - { todo.description }</p>
                    <p>priority - { todo.priority }</p>
                </div>
             )}
        </TodoContext.Consumer>
    )
}
