import React, { Component } from 'react'

export default class SetStateCallback_Class extends Component {

    constructor(props) {
        super(props);

        this.state = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 }

        this.incrementPriority = this.incrementPriority.bind(this);
        this.decrementPriority = this.decrementPriority.bind(this);
    }

    incrementPriority(){
        this.setState((prevState) => ({ ...prevState, "priority": prevState.priority + this.props.step }), this.afterSetSateCallback)
    //    console.log(this.state.priority)
    }

    decrementPriority() {
        this.setState((prevState) => ({ ...prevState, "priority": prevState.priority - this.props.step }), 
            () => { console.log(`In setState callback, priority - ${this.state.priority}`) }
        )
    }

    afterSetSateCallback() {
        console.log(`In afterSetSateCallback(), priority - ${this.state.priority}`)
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

