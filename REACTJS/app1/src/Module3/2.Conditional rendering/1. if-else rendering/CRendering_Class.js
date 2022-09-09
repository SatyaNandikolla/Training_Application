import React, { Component } from "react";
export default class CRendering_Class extends Component{
    render(){
        if(this.props.todo){
            const {id,title,description,priority}=this.props.todo
        return(
            <div>
                <h2>Conditional Rendering--Class Component</h2>
                <p>id-{id}</p>
                <p>title-{title}</p>
                <p>description-{description}</p>
                <p>priority-{priority}</p>
            </div>
        )
        }
        else{
            return(
                <div>
                    <h2>Class Component - Todo is not provided</h2>
                </div>
            )
        }
    }
}