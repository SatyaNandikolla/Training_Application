import React, { Component } from 'react'
import WithCounter2 from './WithCounter2'

class Todo3_Class extends Component {

    constructor(props) {
        super(props);

        this.state = { "id": 1, "title": "Learn JSF", "description": "Finish this article" }
    }

    render() {
        
        const { count, incrementCount, decrementCount } = this.props

        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { this.state.id }</p>
                <p>title - { this.state.title }</p>
                <p>description - { this.state.description }</p>
                <p>priority - { count }</p>
                <button onClick={ incrementCount }>Increment Priority</button>
                <button onClick={ decrementCount }>Decrement Priority</button>
            </div>
        )
    }
}

export default WithCounter2(Todo3_Class, 5)
