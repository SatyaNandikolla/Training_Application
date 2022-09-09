import React, { Component } from 'react'
import todoStyles from './todo.module.css'

export default class StyleModule_Class extends Component {

    render() {
        
        const { todo, color : propsColor } = this.props;
        const { id, title, description, priority, completed } = todo;

        return (
            <div>
                <h2>Class Component</h2>
                <p className={ todoStyles.orange }>id - { id }</p>
                <p className={ todoStyles.blue + " " + todoStyles.italic }>title - { title }</p>
                <p className={ todoStyles[propsColor] }>description - { description }</p>
                <p className={ todoStyles[propsColor] + " " + todoStyles.italic }>priority - { priority }</p>
                <p className={ `${todoStyles[propsColor]} ${todoStyles.bold}` }>completed - { completed + '' }</p>
            </div>
        )
    }
}

