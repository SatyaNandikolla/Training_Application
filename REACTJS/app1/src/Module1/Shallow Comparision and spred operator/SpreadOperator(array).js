import React from "react";
export default function Array(){
    var set1=[1,2,3,4,5]
    var set2=[...set1,6,7,8,9,10]
    console.log(set2)
    return(
        <div>
            <h2>Spread Operator in Array</h2>
        </div>
    )
}