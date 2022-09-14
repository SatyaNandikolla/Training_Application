import React, { Component } from 'react'
import axios from 'axios'

export default class Post_Class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            "title": "", 
            "completed": false
        }

        this.submitForm = this.submitForm.bind(this)
    }

    submitForm() {
        axios.post('http://jsonplaceholder.typicode.com/todos', this.state)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h3>Class Component</h3>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e) =>  this.setState((prevState) => ({ ...prevState, "title": e.target.value })) } />
                </div>
                <div>
                    <label>Completed</label>
                    <input type="radio" name="cc_completed" onChange={(e) => this.setState((prevState) => ({ ...prevState, "completed": true })) }  />Yes
                    <input type="radio" name="cc_completed" onChange={(e) => this.setState((prevState) => ({ ...prevState, "completed": false })) } />No
                </div>
                <div>
                    <button onClick={this.submitForm}>Submit</button>
                </div>
            </div>
        )
    }
}
