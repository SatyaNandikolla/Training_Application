import React from 'react'

function Title_Component(props) {

    console.log("Title_Component rendered")
    
    return (
        <p>title - { props.title }</p>
    )
}

export default Title_Component
