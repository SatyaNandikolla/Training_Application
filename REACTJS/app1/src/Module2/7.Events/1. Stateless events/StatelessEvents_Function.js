import React from "react";
export default function StatelessEvents_Function(){
    function handleClick(){
        console.log("Just clicked the Button in Functional Component")
    }
    return(
        <div>
            <h2>Stateless Events --- Functional Component</h2>
            <button onClick={handleClick}>Functional Component</button>
        </div>
    )
}