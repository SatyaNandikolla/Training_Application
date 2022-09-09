import React, { Component } from 'react'

export default class Child_Class extends Component {
    
    constructor(props) {
        super(props)

        this.state = { "title": "", "description": "", "priority": 5 }
    }

    render() {

        const error = { color: 'orange' };

        return (
            <div>
                <h3>Class Component</h3>
                <div>
                    <label>Title</label>
                    <input type="text" ref={this.props.title} onChange={(e) =>  this.setState((prevState) => ({ ...prevState, "title": e.target.value })) } />
                    { this.state.title === "" && (<span style={ error }>Title cannot be empty</span>) }
                </div>
                <div>
                    <label>Description</label>
                    <textarea ref={this.props.description} onChange={(e) => this.setState((prevState) => ({ ...prevState, "description": e.target.value })) }></textarea>
                    { this.state.description === "" && (<span style={ error }>Description cannot be empty</span>) }
                </div>
                <div>
                    <label>Priority</label>
                    <select ref={this.props.priority} onChange={(e) => this.setState((prevState) => ({ ...prevState, "priority": e.target.value })) }>
                        <option value="5">High</option>
                        <option value="3">Medium</option>
                        <option value="1">Low</option>
                    </select>
                </div>
            </div>
        )
    }
}
