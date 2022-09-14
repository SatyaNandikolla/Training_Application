import React from "react";
export default function Exception(){
    var divide=(x,y)=>{
        if(y==0){
            throw new Error("Can't divide by Zero")
        }
        else{
            return x/y
        }
    }
    // try{
    //     console.log("Result:"+divide(7,2));
    //     console.log("Result:"+divide(7,0))
    // }
    // catch(err){
    //     console.log(err)
    // }
    return(
        <div>
            <h2>Exception</h2>
        </div>
    )
    }
    