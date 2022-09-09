import React from "react";
export default function ObjectFunction(props){
    return(
        <div>
            <h2>Object Props in Functional Component</h2>
            <p>id-{props.todo.id}</p>
            <p>title-{props.todo.title}</p>
            <p>description-{props.todo.description}</p>
            <p>priority-{props.todo.priority}</p>
        </div>
    )
}