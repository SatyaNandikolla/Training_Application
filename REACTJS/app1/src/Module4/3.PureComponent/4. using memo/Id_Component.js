import React from 'react'

function Id_Component(props) {

    console.log("Id_Component rendered")
    
    return (
        <p>id - { props.id }</p>
    )
}

export default React.memo(Id_Component)
