import React from "react";
export default function ShallowCopy(){
    const user={
        name:"Satya",
        address:{
            plot:45
        }
    }
    const copyUser={...user}
    const reUser=user;
    // console.log(user)
    // console.log(copyUser)
    // console.log(user===reUser)
    // console.log(user===copyUser)
    // console.log(user.address)
    // console.log(copyUser.address)
    // console.log(reUser.address)
    // console.log(user.address===reUser.address)
    // console.log(user.address===copyUser.address)
    return(
        <div>
            <h2>Shallow Comparision</h2>
        </div>
    )
}