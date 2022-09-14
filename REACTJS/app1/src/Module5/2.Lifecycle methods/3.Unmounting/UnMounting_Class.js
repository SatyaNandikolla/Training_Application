import React, { Component } from 'react'

export default class Unmounting_Class extends Component {

    constructor(props) {
        super(props);

        this.state = { id: 1, title: "Learn JSF", description: "Finish this article", priority: 3 }
    }

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { this.state.id }</p>
                <p>title - { this.state.title }</p>
                <p>description - { this.state.description }</p>
                <p>priority - { this.state.priority }</p>
            </div>
        )
    }

    componentDidMount() {    
        console.log("Todo_Class component mounted")
		
		// this.interval = setInterval(() => {
        //     this.setState((prevState) => ({ ...prevState, "priority": prevState.priority + 1 }))
        // }, 2000)
    }

    componentWillUnmount() {    
        console.log("Todo_Class component unmounted")
		
		// clearInterval(this.interval)
		
		
    }
}
