import React from "react";
export default function ObjectPropsDestracturing_Function(props){
    const {todo}=props
    const {id,title,description,priority}=todo

    // const {id,title,description,priority}=props.todo
    return(
        <div>
            <h2>Object Props Destracturing--Class Component</h2>
            <p>id-{id}</p>
            <p>title-{title}</p>
            <p>description-{description}</p>
            <p>priority-{priority}</p>
        </div>
    )
}