import React from 'react'

function WithoutCallback_Title(props) {
    console.log("Rendering Title - " + props.text)
    
    return (
        <p>{ props.text }</p>
    )
}

export default React.memo(WithoutCallback_Title)
