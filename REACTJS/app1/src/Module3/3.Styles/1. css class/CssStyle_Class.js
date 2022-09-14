import React, { Component } from 'react'
import './todo.css'

export default class CssStyle_Class extends Component {

    render() {
        
        const { todo, color } = this.props;
        const { id, title, description, priority, completed } = todo;

        return (
            <div>
                <h2>Class Component</h2>
                <p className="orange">id - { id }</p>
                <p className="blue italic">title - { title }</p>
                <p className={ color }>description - { description }</p>
                <p className={ color + " bold" }>priority - { priority }</p>
                <p className={ `${color} italic` }>completed - { completed + '' }</p>
            </div>
        )
    }
}
