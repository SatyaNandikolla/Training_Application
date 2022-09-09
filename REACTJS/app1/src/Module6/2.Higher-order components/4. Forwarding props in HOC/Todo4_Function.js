import React, { useState } from 'react'
import WithCounter3 from './WithCounter3'

function Todo4_Function(props) {
    
    console.log(props)
    const { id, title, description } = props.todo
    const { count, incrementCount, decrementCount } = props

    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { id }</p>
            <p>title - { title }</p>
            <p>description - { description }</p>
            <p>priority - { count }</p>
            <button onClick={ incrementCount }>Increment Priority</button>
            <button onClick={ decrementCount }>Decrement Priority</button>
        </div>
    )
}

export default WithCounter3(Todo4_Function, 5)
