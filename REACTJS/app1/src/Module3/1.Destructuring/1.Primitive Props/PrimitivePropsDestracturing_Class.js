import React, { Component } from "react";
export default class PrimitivePropsDestracturing_Class extends Component{
    render(){
        const { id, title, description, priority } = this.props;
        return(
            <div>
                <h2>Primitive Props Destracturing--Class Component</h2>
                <p>id-{id}</p>
                <p>title-{title}</p>
                <p>description-{description}</p>
                <p>priority-{priority}</p>
            </div>
        )
    }
}