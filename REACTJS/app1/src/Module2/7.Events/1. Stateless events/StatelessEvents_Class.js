import React, { Component } from "react";
export default class StatelessEvents_Class extends Component{
    handleClick(){
        console.log("Just Clicked The Button in Class Component")
    } 
    render(){
        return(
            <div>
                <h2>Stateless Events --- Class Component</h2>
                <button onClick={this.handleClick}>Class Component</button>
            </div>
        )
    }
}