import React from 'react'

export default function ObjectasKey_Function(props) {

    var todos = props.todos
    
    return (
        <div>
            <h2>Functional Component</h2>
            {
                todos.map( todo => <p key={ todo }>{ todo }</p> )
            }
        </div>
    )
}
