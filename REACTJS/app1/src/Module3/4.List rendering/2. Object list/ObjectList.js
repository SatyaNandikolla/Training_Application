import React from "react";
export default function ObjectList(props){
    const{id,title,description,priority}=props.todo
    return(
        <div>
            <h2>Object List</h2>
            <h2>Todo {id}</h2>
            <p>title-{title}</p>
            <p>description-{description}</p>
            <p>priority-{priority}</p>
        </div>
    )
}
