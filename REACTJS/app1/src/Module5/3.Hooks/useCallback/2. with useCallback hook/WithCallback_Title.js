import React from 'react'

function WithCallback_Title(props) {
    console.log("Rendering Title - " + props.text)
    
    return (
        <p>{ props.text }</p>
    )
}

export default React.memo(WithCallback_Title)
