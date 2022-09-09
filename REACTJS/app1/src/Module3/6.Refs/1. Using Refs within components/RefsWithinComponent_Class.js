import React, { Component } from 'react'

export default class RefsWithinComponent_Class extends Component {
    
    constructor(props) {
        super(props)

        this.title = React.createRef("")
        this.description = React.createRef("")
        this.priority = React.createRef(1)

        this.submitForm = this.submitForm.bind(this)
    }

    submitForm() {
        var todo = {
            "title": this.title.current.value,
            "description": this.description.current.value,
            "priority": this.priority.current.value
        }

        console.log(todo)
    }

    render() {

        return (
            <div>
                <h3>Class Component</h3>
                <div>
                    <label>Title</label>
                    <input type="text" ref={this.title} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea ref={this.description}></textarea>
                </div>
                <div>
                    <label>Priority</label>
                    <select ref={this.priority}>
                        <option value="5">High</option>
                        <option value="3">Medium</option>
                        <option value="1">Low</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.submitForm}>Submit</button>
                </div>
            </div>
        )
    }
}
