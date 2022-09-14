// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { incrementPriority, decrementPriority, notAttending, attending, attended } from '../redux-modules'

// class Todo_Class extends Component {
//     render() {
        
//         return (
//             <div>
//                 <h2>Class Component</h2>

//                 <h3>Todo</h3>
//                 <p>id - { this.props.todo.id }</p>
//                 <p>title - { this.props.todo.title }</p>
//                 <p>priority - { this.props.todo.priority }</p>
//                 <button onClick={ this.props.incrementPriority }>Increment Priority</button>
//                 <button onClick={ this.props.decrementPriority }>Decrement Priority</button>

//                 <h3>Meeting</h3>
//                 <p>id - { this.props.meeting.id }</p>
//                 <p>title - { this.props.meeting.title }</p>
//                 <p>status - { this.props.meeting.status }</p>
//                 <button onClick={ this.props.notAttending }>Not Attending</button>
//                 <button onClick={ this.props.attending }>Attending</button>
//                 <button onClick={ this.props.attended }>Attended</button>
//             </div>
//         )
//     }
// }

// const mapStoreToProps = (store) => {
//     return {
//         todo: {
//             id: store.todo.id,
//             title: store.todo.title,
//             priority: store.todo.priority
//         },
//         meeting: store.meeting
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         incrementPriority: () => dispatch(incrementPriority()),
//         decrementPriority: () => dispatch(decrementPriority()),
//         notAttending: () => dispatch(notAttending()),
//         attending: () => dispatch(attending()),
//         attended: () => dispatch(attended())
//     }
// }

// export default connect(mapStoreToProps, mapDispatchToProps)(Todo_Class)
