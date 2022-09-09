import React,{ Component } from "react"

export default class Test1 extends Component{
    constructor(id,name){
        super()
        this.id=id;
        this.name=name
    }
render(){
    return(
        <div>
            <h2>Class</h2>
        </div>
    )
}
}
var test1=new Test1(1,"Satya")
// console.log(test1.id)
// console.log(test1.name)
