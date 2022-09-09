//jsx allows you to write html in react
import React, { Component } from "react";
export default class Jsx_Class extends Component{
    render(){
        var todo={"id":1,"Title":"Learn Jsf", "Description":"Finish This Article","Priority":5}
        return(
            <div>
                <h2>Class Component</h2>
                <p>id-{todo.id}</p>
                <p>Title-{todo.Title}</p>
                <p>Description-{todo.Description}</p>
                <p>Priority-{todo.Priority}</p>
            </div>
        )
    }
}