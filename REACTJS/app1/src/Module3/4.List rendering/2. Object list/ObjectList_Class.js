import React, { Component } from "react";
import ObjectList from "./ObjectList";
export default class ObjectList_Class extends Component{
    render(){
        var todos=this.props.todos
        return(
            <div>
                <h2>Object List--Functional Component</h2>
                {
                    todos.map(todo=><ObjectList todo={todo}/>)
                }
            </div>
        )
    }
}