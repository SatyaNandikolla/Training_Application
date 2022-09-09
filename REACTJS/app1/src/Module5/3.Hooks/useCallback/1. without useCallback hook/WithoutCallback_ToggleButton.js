import React from 'react'

function WithoutCallback_ToggleButton(props) {
    const { value, callbackFunc } = props
    console.log("Rendering toggle button - " + value)

    return (
        <button onClick={ callbackFunc }> Toggle Value - { value+"" }</button>
    )
}

export default React.memo(WithoutCallback_ToggleButton)
