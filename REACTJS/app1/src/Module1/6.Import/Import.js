import React from "react";
import Add from "./Add";
import Employee from "./Employee";
export default function Import(){
  return(
    <div>
        <h2>Import</h2>
        {/* <Employee/> */}
    </div>
  )
}
var employee=new Employee(1,"Satya")
// console.log(employee.id)
// console.log(employee.name)
// console.log(Add(2,3))
