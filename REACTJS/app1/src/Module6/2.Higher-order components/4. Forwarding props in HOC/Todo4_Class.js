import React, { Component } from 'react'
import WithCounter3 from './WithCounter3'

class Todo4_Class extends Component {

    render() {
        
        const { id, title, description } = this.props.todo
        const { count, incrementCount, decrementCount } = this.props

        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { id }</p>
                <p>title - { title }</p>
                <p>description - { description }</p>
                <p>priority - { count }</p>
                <button onClick={ incrementCount }>Increment Priority</button>
                <button onClick={ decrementCount }>Decrement Priority</button>
            </div>
        )
    }
}

export default WithCounter3(Todo4_Class)


