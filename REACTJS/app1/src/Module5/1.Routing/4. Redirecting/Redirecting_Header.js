import React from 'react'
import { Link } from "react-router-dom";

export default function Redirecting_Header() {
    
    console.log("rendered Header Component")
    const headerStyle = { marginTop: "1%", marginBottom: "10%" };
    return (
        <div style={ headerStyle }>
            <h2>Header Component</h2>
            <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp; 
            <Link to="/func">Functional Component</Link> &nbsp;&nbsp;&nbsp; 
            <Link to="/class">Class Component</Link>
        </div>
    )
}