// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { incrementPriority, decrementPriority, notAttending, attending, attended } from '../redux-modules'

// function Todo_Function(props) {
    
//     const todo = useSelector((state) => ({ id: state.todo.id, title: state.todo.title, priority: state.todo.priority }))
//     const meeting = useSelector((state) => state.meeting)
//     const dispatch = useDispatch()

//     return (
//         <div>
//             <h2>Functional Component</h2>

//             <h3>Todo</h3>
//             <p>id - { todo.id }</p>
//             <p>title - { todo.title }</p>
//             <p>priority - { todo.priority }</p>
//             <button onClick={ () => dispatch(incrementPriority()) }>Increment Priority</button>
//             <button onClick={ () => dispatch(decrementPriority()) }>Decrement Priority</button>

//             <h3>Meeting</h3>
//             <p>id - { meeting.id }</p>
//             <p>title - { meeting.title }</p>
//             <p>status - { meeting.status }</p>
//             <button onClick={ () => dispatch(notAttending()) }>Not Attending</button>
//             <button onClick={ () => dispatch(attending()) }>Attending</button>
//             <button onClick={ () => dispatch(attended()) }>Attended</button>
//         </div>
//     )
// }

// export default Todo_Function
