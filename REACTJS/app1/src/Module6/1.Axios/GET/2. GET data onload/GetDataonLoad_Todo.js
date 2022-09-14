import React from 'react'

export default function GetDataonLoad_Todo(props) {

    const { id, title, completed } = props.todo;

    return (
        <div>
            <h3>Todo { id }</h3>
            <p>title - { title }</p>
            <p>Completed - { completed+"" }</p>
        </div>
    )
}