import React, { Component } from "react";
export default class PrimitiveClass extends Component {
    render() {
        return (
            <div>
                <h2>Primitive Props in Class Component</h2>
                <p>id-{this.props.id}</p>
                <p>title-{this.props.title}</p>
                <p>description-{this.props.description}</p>
                <p>priority-{this.props.priority}</p>
            </div>
        )
    }
}