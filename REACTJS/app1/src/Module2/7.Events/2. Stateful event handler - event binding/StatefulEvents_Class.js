import React, { Component } from "react";
export default class StatefulEvents_Class extends Component{
    constructor(props){
        super(props);
        this.hello="Hello"
        this.printHello=this.printHello.bind(this)
    }
    printHello(){
        console.log(this.hello)
    } 
    // printHello_arrow=()=>{
    //     console.log(this.hello)
    // }
    render(){
        return(
            <div>
                <h2>Stateless Events --- Class Component</h2>
                <button onClick={this.printHello}>Class Component</button>
                {/* <button onClick={this.printHello_arrow}>Class Component</button> */}
            </div>
        )
    }
}