import React from 'react'

function Description_Component(props) {

    console.log("Description_Component rendered")
    
    return (
        <p>description - { props.description }</p>
    )
}

export default React.memo(Description_Component)
