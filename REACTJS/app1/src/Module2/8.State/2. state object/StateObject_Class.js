import React, { Component } from 'react';
export default class StateObject_Class extends Component{
    constructor(props){
        super(props)
        this.state={id: 1, title: "Learn JSF", description: "Finish this article", priority: 3}
    }
    render(){
        return(
            <div>
            <h2>State Object--Class Component</h2>
            <p>id-{this.state.id}</p>
            <p>title-{this.state.title}</p>
            <p>description-{this.state.description}</p>
            <p>priority-{this.state.priority}</p>
        </div>
        )
    }
}