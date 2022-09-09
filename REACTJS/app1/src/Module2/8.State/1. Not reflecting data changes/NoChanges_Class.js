import React, { Component } from "react";
export default class NoChanges_Class extends Component{
    constructor(props){
        super(props);
        this.todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 }
        this.incrementPriority=this.incrementPriority.bind(this)
        this.decrementPriority=this.decrementPriority.bind(this)
    }
    incrementPriority(){
        this.todo.priority++
        console.log(this.todo.priority)
    }
    decrementPriority(){
        this.todo.priority--
        console.log(this.todo.priority)
    }
render(){
    return(
        <div>
            <h2>Not Reflecting Data Changes</h2>
            <p>id-{this.todo.id}</p>
            <p>title-{this.todo.title}</p>
            <p>description-{this.todo.description}</p>
            <p>priority-{this.todo.priority}</p>
            <button onClick={this.incrementPriority}>Increment Priority</button>
            <button onClick={this.decrementPriority}>Decrement Priority</button>
        </div>
    )
}
}