import React from "react";
export default function Callback(){
    const multiplyAndAdd=(x,y,z,nextFunc)=>{
        console.log("Waiting...")
        setTimeout(function(){
             let result1=x*y;
             nextFunc(result1,z)
        },3000)
    }
    const addAndPrint = (a, b) => console.log(a + b);

     multiplyAndAdd(2, 3, 5, addAndPrint); // 2*3+5
    return(
        <div>
            <h2>Callback</h2>
        </div>
    )
}


