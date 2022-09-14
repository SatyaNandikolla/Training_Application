import React from "react";
import ObjectList from "./ObjectList";
export default function ObjectList_Function(props){
    var todos=props.todos
    return(
        <div>
            <h2>Object List--Functional Component</h2>
            {
                todos.map(todo=><ObjectList todo={todo} />)
            }
        </div>

    )
}