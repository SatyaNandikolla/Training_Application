import React from 'react'

export default function IdasKey(props) {

    const { id, title, description, priority } = props.todo;

    return (
        <div>
            <h3>Todo { id }</h3>
            <p>title - { title }</p>
            <p>description - { description }</p>
            <p>priority - { priority }</p>
        </div>
    )
}