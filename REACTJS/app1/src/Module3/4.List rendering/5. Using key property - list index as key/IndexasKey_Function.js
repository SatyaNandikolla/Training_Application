import React from 'react'

export default function IndexasKey_Function(props) {

    var todos = props.todos
    
    return (
        <div>
            <h2>Functional Component</h2>
            {
                todos.map( (todo, index) => <p key={ index }>{ todo }</p> )
            }
        </div>
    )
}
