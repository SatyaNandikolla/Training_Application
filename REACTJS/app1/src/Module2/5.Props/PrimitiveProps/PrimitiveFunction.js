import React from "react";
export default function PrimitiveFunction(props){
    return(
        <div>
            <h2>Primitive Props in Functional Component</h2>
            <p>id-{props.id}</p>
            <p>title-{props.title}</p>
            <p>tescription-{props.description}</p>
            <p>priority-{props.priority}</p>
        </div>
    )
}