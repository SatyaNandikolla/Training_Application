import React, { PureComponent } from 'react'

class Description_Component extends PureComponent {
    render() {
        console.log("Description_Component rendered")

        return (
            <p>Description - { this.props.description }</p>
        )
    }
}

export default Description_Component
