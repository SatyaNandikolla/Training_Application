//jsx allows you to write html in react
import React from "react";
export default function Jsx_Function(){
    var todo={"id":1,"Title":"Learn Jsf", "Description":"Finish This Article","Priority":5}
    return(
        <div>
            <h2>Functional Component</h2>
            <p>id-{todo.id}</p>
            <p>Title-{todo.Title}</p>
            <p>Description-{todo.Description}</p>
            <p>Priority-{todo.Priority}</p>
        </div>

    )
}