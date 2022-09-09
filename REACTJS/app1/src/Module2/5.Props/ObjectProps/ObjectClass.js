import React, { Component } from "react";
export default class ObjectClass extends Component{
    render(){
    return(
        <div>
            <h2>Object Props in Class Component</h2>
            <p>id-{this.props.todo.id}</p>
            <p>title-{this.props.todo.title}</p>
            <p>description-{this.props.todo.description}</p>
            <p>priority-{this.props.todo.priority}</p>
        </div>
    )
    }
}