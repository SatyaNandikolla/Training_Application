import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class OPropTypes_Class extends Component {
    /*static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            priority: PropTypes.number
        }).isRequired
    }*/

    render() {
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

OPropTypes_Class.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        priority: PropTypes.number.isRequired,
		completed: PropTypes.bool
    }).isRequired
}

