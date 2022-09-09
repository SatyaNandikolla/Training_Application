import React from 'react'
import todoStyles from './todo.module.css'

export default function StyleModule_Function(props) {

    const { todo, color : propsColor } = props;
    const { id, title, description, priority, completed } = todo;

    return (
        <div>
            <h2>Functional Component</h2>
            <p className={ todoStyles.orange }>id - { id }</p>
            <p className={ todoStyles.blue + " " + todoStyles.italic }>title - { title }</p>
            <p className={ todoStyles[propsColor] }>description - { description }</p>
            <p className={ todoStyles[propsColor] + " " + todoStyles.italic }>priority - { priority }</p>
            <p className={ `${todoStyles[propsColor]} ${todoStyles.bold}` }>completed - { completed + '' }</p>
        </div>
    )
}

