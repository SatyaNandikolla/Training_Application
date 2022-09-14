import React from "react";
import {Outlet} from "react-router-dom";

export default function Basic_Home() {
    return (
        <div>
            <center>
            <h2>Home Component</h2>
            <Outlet/>
            </center>
        </div>
    )
}



