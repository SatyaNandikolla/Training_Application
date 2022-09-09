import React, { useState } from 'react'
import Id_Component from './Id_Component';
import Title_Component from './Title_Component';
import Description_Component from './Description_Component';
import Priority_Component from './Priority_Component';

export default function NormalComponentinFunction() {
        
    var [ todo, setTodo ] = useState({ id: 1, title: "Learn JSF", description: "Finish this article", priority: 5 })

    function incrementPriority() {
        setTodo((prevState) => ({ ...prevState, "priority": prevState.priority + 1 }))
    }

    function decrementPriority() {
        setTodo((prevState) => ({ ...prevState, "priority": prevState.priority - 1 }))
    }
    
    return (
        <div>
            <Id_Component id={ todo.id } />
            <Title_Component title={ todo.title } />
            <Description_Component description={ todo.description } />
            <Priority_Component priority={ todo.priority } />
            <button onClick={ incrementPriority }>Increment Priority</button>
            <button onClick={ decrementPriority }>Decrement Priority</button>
        </div>
    )
}
