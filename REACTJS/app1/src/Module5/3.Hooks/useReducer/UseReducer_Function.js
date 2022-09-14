import React, { useReducer } from 'react'

export default function UseReducer_Function(props) {
    
    var initialTodo = { id: 1, title: "Learn JSF", description: "Finish this article", priority: 5 };
    var [ todo, dispatch ] = useReducer(reducer, initialTodo)

    function reducer(state, action) {
        switch(action) {
            case 'increment':
                return { ...state, "priority": state.priority + 1 }
                break;
            
            case 'decrement':
                return { ...state, "priority": state.priority - 1 }
                break;

            default:
                return state;
        }
    }
    
    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>description - { todo.description }</p>
            <p>priority - { todo.priority }</p>
            <button onClick={ () => dispatch('increment') }>Increment Priority</button>
            <button onClick={ () => dispatch('decrement') }>Decrement Priority</button>
        </div>
    )
}
