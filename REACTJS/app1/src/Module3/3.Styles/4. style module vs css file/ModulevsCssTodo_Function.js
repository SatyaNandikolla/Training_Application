import React from 'react'
import ChildComponent from './ChildComponent'
import todoStyles from './todo.module.css'
import './todo.css'

function ModulevsCssTodo_Function(props) {

    const { id, title, description, priority, completed } = props.todo;

    return (
        <div>
            <h2>Functional Component</h2>
            <p className={ todoStyles.orange }>id - { id }</p>
            <p className={ todoStyles.blue + " " + todoStyles.italic }>title - { title }</p>
            <ChildComponent description={ description } priority={ priority } completed={ completed } />
        </div>
    )
}

export default ModulevsCssTodo_Function
