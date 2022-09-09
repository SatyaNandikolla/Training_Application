import React, { Component } from 'react'

class Description_Component extends Component {
    render() {
        console.log("Description_Component rendered")

        return (
            <p>Description - { this.props.description }</p>
        )
    }
}

export default Description_Component
