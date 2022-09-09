import React from 'react'

function Priority_Component(props) {

    console.log("Priority_Component rendered")
    
    return (
        <p>description - { props.priority }</p>
    )
}

export default Priority_Component
