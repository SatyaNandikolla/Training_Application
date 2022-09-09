import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import todoStyles from './todo.module.css'
import './todo.css'

export class Todo_Class extends Component {

    render() {
        
        const { id, title, description, priority, completed } = this.props.todo;

        return (
            <div>
                <h2>Class Component</h2>
                <p className={ todoStyles.orange }>id - { id }</p>
                <p className={ todoStyles.blue + " " + todoStyles.italic }>title - { title }</p>
                <ChildComponent description={ description } priority={ priority } completed={ completed } />
            </div>
        )
    }
}

export default Todo_Class
