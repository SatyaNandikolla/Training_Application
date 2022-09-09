// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { incrementPriority, decrementPriority } from '../redux-modules'

// class Todo_Class extends Component {
//     render() {
        
//         return (
//             <div>
//                 <h2>Class Component</h2>
//                 <p>id - { this.props.id }</p>
//                 <p>title - { this.props.title }</p>
//                 <p>priority - { this.props.priority }</p>
//                 <button onClick={ this.props.incrementPriority }>Increment Priority</button>
//                 <button onClick={ this.props.decrementPriority }>Decrement Priority</button>
//             </div>
//         )
//     }
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

// export default connect(mapStoreToProps, mapDispatchToProps)(Todo_Class)
