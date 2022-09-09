import React, { Component } from 'react'

class Priority_Component extends Component {
    render() {
        console.log("Priority_Component rendered")

        return (
            <p>Priority - { this.props.priority }</p>
        )
    }
}

export default Priority_Component
