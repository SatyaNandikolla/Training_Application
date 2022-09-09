import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementPriority, decrementPriority } from '../redux-modules'

function Todo_Function(props) {
    
    const todo = useSelector((state) => ({ id: state.id, title: state.title, priority: state.priority }))
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>priority - { todo.priority }</p>
            <button onClick={ () => dispatch(incrementPriority()) }>Increment Priority</button>
            <button onClick={ () => dispatch(decrementPriority()) }>Decrement Priority</button>
        </div>
    )
}

export default Todo_Function
