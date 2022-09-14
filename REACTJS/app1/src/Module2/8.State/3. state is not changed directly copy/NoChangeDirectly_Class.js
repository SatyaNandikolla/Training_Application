import React, { Component } from 'react'

export default class NoChangeDirectly_Class extends Component {

    constructor(props) {
        super(props);

        this.state = { id: 1, title: "Learn JSF", description: "Finish this article", priority: 3 }

        this.incrementPriority = this.incrementPriority.bind(this);
        this.decrementPriority = this.decrementPriority.bind(this);
    }

    incrementPriority() {
        this.state.priority = this.state.priority + 1
    }

    decrementPriority() {
        this.state.priority = this.state.priority - 1
    }

    render() {
        
        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { this.state.id }</p>
                <p>title - { this.state.title }</p>
                <p>description - { this.state.description }</p>
                <p>priority - { this.state.priority }</p>
                <button onClick={ this.incrementPriority }>Increment Priority</button>
                <button onClick={ this.decrementPriority }>Decrement Priority</button>
            </div>
        )
    }
}

