import React, { useState } from 'react'
import Math1 from './Math1'

function Todo1_Function(props) {
    
    var a=3, b=4
    const { add, subtract } = props

    return (
        <div>
            <h2>Functional Component</h2>
            <p>a - {a}</p>
            <p>b - {b}</p>
            <p>a + b = { add(a, b) }</p>
            <p>a - b = { subtract(a, b) }</p>
        </div>
    )
}

export default Math1(Todo1_Function)
