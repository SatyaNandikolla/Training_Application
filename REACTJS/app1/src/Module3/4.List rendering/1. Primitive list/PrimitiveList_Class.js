import React, { Component } from "react";
export default class PrimitiveList_Class extends Component{
    render(){
        var todos=this.props.todos
        return(
            <div>
                <h2>Primitive List--Class Component</h2>
                {
                    todos.map(todo=><p>{todo}</p>)
                }
            </div>
        )
    }
}