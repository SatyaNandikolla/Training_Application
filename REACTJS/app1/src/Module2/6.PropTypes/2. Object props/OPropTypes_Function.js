import React from 'react'
import PropTypes from 'prop-types'

export default function OPropTypes_Function(props) {
    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { props.todo.id }</p>
            <p>title - { props.todo.title }</p>
            <p>description - { props.todo.description }</p>
            <p>priority - { props.todo.priority }</p>
        </div>
    )
}

OPropTypes_Function.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        priority: PropTypes.number.isRequired,
		completed: PropTypes.bool
    }).isRequired
}
