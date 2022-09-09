import React from 'react'
import ReactDOM from 'react-dom'

export default function BasicUsage_PortalTest(props) {
    
    return ReactDOM.createPortal(
        <h3>This is Portal Test</h3>,
        document.getElementById("portal-root")
    )
}