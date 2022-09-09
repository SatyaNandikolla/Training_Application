import React from "react";
export default function PrimitiveList_Function(props){
    var todos=props.todos
    return(
        <div>
            <h2>Primitive List--Functional Component</h2>
            {
                todos.map(todo=><p>{todo}</p>)
            }
        </div>
    )
}