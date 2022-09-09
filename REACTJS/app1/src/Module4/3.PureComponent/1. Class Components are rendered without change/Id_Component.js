import React, { Component } from 'react'

class Id_Component extends Component {
    render() {
        console.log("Id_Component rendered")
        
        return (
            <p>id - { this.props.id }</p>
        )
    }
}

export default Id_Component
