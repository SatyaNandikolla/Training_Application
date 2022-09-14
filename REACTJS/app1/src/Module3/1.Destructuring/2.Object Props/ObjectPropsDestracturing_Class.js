import React, { Component } from "react";
export default class ObjectPropsDestracturing_Class extends Component{
    render(){

    const {todo}=this.props
    const {id,title,description,priority}=todo

    // const {id,title,description,priority}=this.props.todo
    return(
        <div>
            <h2>Object Props Destracturing--Functional Component</h2>
            <p>id-{id}</p>
            <p>title-{title}</p>
            <p>description-{description}</p>
            <p>priority-{priority}</p>
        </div>
    )
    }
}