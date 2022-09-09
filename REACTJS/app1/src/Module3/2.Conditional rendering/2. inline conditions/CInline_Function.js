import React from "react";
export default function CInline_Function(props){
    const {id,title,description,priority}=props.todo
    return(
        <div>
            <h2>Inline Condition--Functional Component</h2>
            {id==1 &&<p>id-{id}</p>}
            {title && <p>title-{title}</p>}
            <p>description-{description}</p>
            {priority > 5 ? <p>priority--High</p> : <p>priority - Normal</p>}
        </div>
    )
}