import React from 'react'
import PropTypes from 'prop-types'

function Todo_Function(props) {
    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { props.id }</p>
            <p>title - { props.title }</p>
            <p>description - { props.description }</p>
            <p>priority - { props.priority }</p>
        </div>
    )
}

export default Todo_Function
