import React, { useState } from "react";
export default function StateObject_Function(){
    var [todo]=useState({id: 1, title: "Learn JSF", description: "Finish this article", priority: 3})
    return(
        <div>
            <h2>State Object--Functional Component</h2>
            <p>id-{todo.id}</p>
            <p>title-{todo.title}</p>
            <p>description-{todo.description}</p>
            <p>priority-{todo.priority}</p>
        </div>
    )
}