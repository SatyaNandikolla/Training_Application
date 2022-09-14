import React, { Component } from 'react'

export default class Onchange_Class extends Component {
    
    constructor(props) {
        super(props)

        this.todo = { "title": "", "description": "", "priority": 5 }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm() {
        console.log(this.todo)
    }

    render() {

        return (
            <div>
                <h3>Class Component</h3>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e) => this.todo.title = e.target.value } />
                </div>
                <div>
                    <label>Description</label>
                    <textarea onChange={(e) => this.todo.description = e.target.value }></textarea>
                </div>
                <div>
                    <label>Priority</label>
                    <select onChange={(e) => this.todo.priority = parseInt(e.target.value) }>
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
