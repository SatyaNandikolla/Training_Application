import React, { Component } from 'react'

export default class BasicForm_Class extends Component {
    
    constructor(props) {
        super(props)

        this.submitForm = this.submitForm.bind(this)
    }

    submitForm() {
        var todo = {
            "title": document.getElementById("title").value,
            "description": document.getElementById("description").value,
            "priority": parseInt(document.getElementById("priority").value)
        }

        console.log(todo)
    }

    render() {

        return (
            <div>
                <h3>Class Component</h3>
                <div>
                    <label>Title</label>
                    <input type="text" id="title" />
                </div>
                <div>
                    <label>Description</label>
                    <textarea id="description"></textarea>
                </div>
                <div>
                    <label>Priority</label>
                    <select id="priority">
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
