import React from 'react'
import './todo.css'

export default function CssStyle_Function(props) {

    const { todo, color } = props;
    const { id, title, description, priority, completed } = todo;

    return (
        <div>
            <h2>Functional Component</h2>
            <p className="orange">id - { id }</p>
            <p className="blue italic">title - { title }</p>
            <p className={ color }>description - { description }</p>
            <p className={ color + " bold" }>priority - { priority }</p>
            <p className={ `${color} italic` }>completed - { completed + '' }</p>
        </div>
    )
}

