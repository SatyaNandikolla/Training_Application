import React from 'react'

function WithCallback_IncrementButton(props) {
    const { value, callbackFunc } = props
    console.log("Rendering increment button - " + value)
    
    return (
        <button onClick={ callbackFunc }> Increment Value - { value }</button>
    )
}

export default React.memo(WithCallback_IncrementButton)
