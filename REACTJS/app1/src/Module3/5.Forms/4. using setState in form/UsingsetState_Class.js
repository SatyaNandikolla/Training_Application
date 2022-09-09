import React, { Component } from 'react'

export default class UsingsetState__Class extends Component {
    
    constructor(props) {
        super(props)

        this.state = { "title": "", "description": "", "priority": 5 }
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm() {
        console.log(this.state)
    }

    render() {

        const error = { color: 'orange' };

        return (
            <div>
                <h3>Class Component</h3>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e) =>  this.setState((prevState) => ({ ...prevState, "title": e.target.value })) } />
                    { this.state.title === "" && (<span style={ error }>Title cannot be empty</span>) }
                </div>
                <div>
                    <label>Description</label>
                    <textarea onChange={(e) => this.setState((prevState) => ({ ...prevState, "description": e.target.value })) }></textarea>
                    { this.state.description === "" && (<span style={ error }>Description cannot be empty</span>) }
                </div>
                <div>
                    <label>Priority</label>
                    <select onChange={(e) => this.setState((prevState) => ({ ...prevState, "priority": e.target.value })) }>
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
