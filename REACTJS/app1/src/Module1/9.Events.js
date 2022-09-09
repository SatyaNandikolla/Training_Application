import React from "react";
export default function Events(){
    function myFunction(){
        console.log("Button Clicked")
        alert("Button Clicked")
    }
    return(
        <div>
            <h2>Events</h2>
            <button id="submitBtn" onClick={myFunction}>Submit</button>
        </div>
    )
}