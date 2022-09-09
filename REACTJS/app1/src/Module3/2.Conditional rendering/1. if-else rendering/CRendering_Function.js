import React from "react";
export default function CRendering_Function(props){
    if(props.todo){
        const {id,title,description,priority}=props.todo
        return(
            <div>
                <h2>Conditional Rendering--Functional Component</h2>
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
                <h2>Functional Component - Todo is not provided</h2>
            </div>
        )

    }
}