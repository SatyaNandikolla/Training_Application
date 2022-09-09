import recat, { Component } from "react";
export default class Static extends Component{
    static PI=3.14;
    // PI=3.3333333333 //value is not modified bcz it is static
    static add(x,y){
        return x+y
    }
 render(){
    return(
        <div>
            <h2>Static</h2>
        </div>
    )
 }
}
// console.log(Static.PI)
// console.log(Static.add(2,3))