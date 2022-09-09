// import React from 'react'
// import { connect } from 'react-redux'
// import { incrementPriority, decrementPriority } from '../redux-modules/todo/Actions'

// function Todo_Function(props) {
    
//     return (
//         <div>
//             <h2>Functional Component</h2>
//             <p>id - { props.id }</p>
//             <p>title - { props.title }</p>
//             <p>priority - { props.priority }</p>
//             <button onClick={ props.incrementPriority }>Increment Priority</button>
//             <button onClick={ props.decrementPriority }>Decrement Priority</button>
//         </div>
//     )
// }

// const mapStoreToProps = (store) => {
//     return {
//         id: store.id,
//         title: store.title,
//         priority: store.priority
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         incrementPriority: () => dispatch(incrementPriority()),
//         decrementPriority: () => dispatch(decrementPriority())
//     }
// }

// const connectToStore = connect(mapStoreToProps, mapDispatchToProps)

// export default connectToStore(Todo_Function)
