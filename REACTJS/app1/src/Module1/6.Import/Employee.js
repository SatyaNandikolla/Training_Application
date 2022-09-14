import React, { Component } from "react";
export default class Employee extends Component{
    constructor(id,name){
        super()
        this.id=id;
        this.name=name
    }
    render(){
        return(
            <div>
                <h2>Employee</h2>
            </div>
        )
    }
}