import React, { Component } from "react";
export default class Inheritance extends Component{
    constructor(name,age){
        super()
        this.name=name;
        this.age=age
    }
    greet(){
        console.log("Hi"+this.name)
    }
    printAge(){
        console.log("Age:"+this.age)
    }
    render(){
        return(
            <div>
                <h2>Inheritence</h2>
            </div>
        )
    }
}
class Person extends Inheritance{
    constructor(rollNum,name,age){
        super(name,age)
        this.rollNum=rollNum
    }
    greet(){
        console.log("Hi " +this.name+", Your rollNum is:"+this.rollNum)
    }
}
// var person=new Person(529,"Satya",22)
// person.greet()
// person.printAge()