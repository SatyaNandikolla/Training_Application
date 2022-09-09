import React, { Component } from 'react'

export default class Mounting_Class extends Component {

    constructor(props) {
        super(props);

        this.state = { id: 1, title: "Learn JSF", description: "Finish this article", priority: 3 }
    }

    static getDerivedStateFromProps(props, state) {
        return { createdBy: props.createdBy, reviewedBy: state.title.includes("JSF") ? props.reviewedBy : "" }
    }

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>id - { this.state.id }</p>
                <p>title - { this.state.title }</p>
                <p>description - { this.state.description }</p>
                <p>priority - { this.state.priority }</p>
                <p>createdBy - { this.state.createdBy }</p>
                <p>reviewedBy - { this.state.reviewedBy }</p>
            </div>
        )
    }
	
	componentDidMount() {
        console.log("Component Mounted")
	}
}
