import React from "react";
export default function Object(){
    var set1={id:1,"name":"Satya"}
    var set2={...set1,"age":22}
    console.log(set2)
    return(
        <div>
            <h2>Spread Operator in Object</h2>
        </div>
    )

}