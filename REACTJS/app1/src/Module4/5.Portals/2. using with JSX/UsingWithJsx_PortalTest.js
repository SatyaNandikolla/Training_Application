import React from 'react'
import ReactDOM from 'react-dom'

export default function UsingWithJsx_PortalTest(props) {
    
    var todo = { "id": 2, "title": "Stop drinking to much coffee", "description": "Coffee is evil!", "priority": 3 }

    return ReactDOM.createPortal(
        <div>
            <h2>Portal Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>description - { todo.description }</p>
            <p>priority - { todo.priority }</p>
        </div>,
        document.getElementById("portal-root")
    )
}