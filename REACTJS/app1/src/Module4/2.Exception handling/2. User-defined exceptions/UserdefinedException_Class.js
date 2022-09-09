import React, { Component } from 'react'

export default class UserdefinedException_Class extends Component {
    render() {

        if(!this.props.id) {
            throw Error("Invalid Todo - id not provided")
        }

        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { this.props.todo.id }</p>
                <p>title - { this.props.todo.title }</p>
                <p>description - { this.props.todo.description }</p>
                <p>priority - { this.props.todo.priority }</p>
            </div>
        )
    }
}


