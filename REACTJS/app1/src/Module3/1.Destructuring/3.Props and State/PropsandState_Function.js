import React, { useState } from 'react'

export default function PropsandState_Function(props) {
        
    var [ todo, setTodo ] = useState({ id: 2, 
        title: "Stop drinking to much coffee", 
        description: "Coffee is evil!",
        priority: 3
    })

    const { id : propsId, title : propsTitle, description : propsDescription, priority : propsPriority } = props;
    const { id : stateId, title : stateTitle, description : stateDescription, priority : statePriority } = todo;

    return (
        <div>
            <h2>Functional Component</h2>
            <h3>Props</h3>
            <p>id - { propsId }</p>
            <p>title - { propsTitle }</p>
            <p>description - { propsDescription }</p>
            <p>priority - { propsPriority }</p>

            <h3>State</h3>
            <p>id - { stateId }</p>
            <p>title - { stateTitle }</p>
            <p>description - { stateDescription }</p>
            <p>priority - { statePriority }</p>
        </div>
    )
}
