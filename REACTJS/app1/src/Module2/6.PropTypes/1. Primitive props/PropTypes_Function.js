import React from 'react'
import PropTypes from 'prop-types'

export default function PropTypes_Function(props) {
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

PropTypes_Function.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    completed: PropTypes.bool
}

