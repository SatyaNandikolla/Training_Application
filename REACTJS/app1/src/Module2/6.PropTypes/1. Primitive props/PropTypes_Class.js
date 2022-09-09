import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PropTypes_Class extends Component {
    /*static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        priority: PropTypes.number.isRequired,
        completed: PropTypes.bool
    }*/

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

PropTypes_Class.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    completed: PropTypes.bool
}

