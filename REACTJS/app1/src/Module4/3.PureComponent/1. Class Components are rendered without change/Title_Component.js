import React, { Component } from 'react'

class Title_Component extends Component {
    render() {
        console.log("Title_Component rendered")

        return (
            <p>Title - { this.props.title }</p>
        )
    }
}

export default Title_Component
