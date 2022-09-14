import React from 'react'

export default function UsingAnchorTag_Header() {
    
    console.log("rendered Header Component")
    const headerStyle = { marginTop: "1%", marginBottom: "10%" };
    return (
        <div style={ headerStyle }>
            <a href="/">Home</a> &nbsp;&nbsp;&nbsp; 
            <a href="/func">Functional Component</a> &nbsp;&nbsp;&nbsp; 
            <a href="/class">Class Component</a>
        </div>
    )
}