import React from 'react'

export default function SingleErrorBoundary_Function(props) {

    if(!props.id) {
        throw Error("Invalid Todo - id not provided")
    }

    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { props.todo.id }</p>
            <p>title - { props.todo.title }</p>
            <p>description - { props.todo.description }</p>
            <p>priority - { props.todo.priority }</p>
        </div>
    )
}
