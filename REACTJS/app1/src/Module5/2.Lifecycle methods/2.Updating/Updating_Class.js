import React, { Component } from 'react'

export default class Updating_Class extends Component {

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
        setTimeout(() => {
            console.log("State Change Timeout")
            this.setState({ ...this.state, "title": "Learn React" })
        }, 2000)
    }

    shouldComponentUpdate() {
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("prevProps: " + JSON.stringify(prevProps))
        console.log("prevState: " + JSON.stringify(prevState))
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component updated")

        if(prevState.title !== this.state.title) {
            // any action related to title change
            console.log("Title changed")
        }
    }
}
