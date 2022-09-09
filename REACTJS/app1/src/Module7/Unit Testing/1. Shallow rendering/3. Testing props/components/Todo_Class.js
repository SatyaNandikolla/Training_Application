import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo_Class extends Component {
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { this.props.id }</p>
                <p>title - { this.props.title }</p>
                <p>description - { this.props.description }</p>
                <p>priority - { this.props.priority }</p>
            </div>
        )
    }
}

export default Todo_Class
