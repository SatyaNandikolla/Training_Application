import React, { Component } from 'react'
import axios from 'axios'

export default class GetDatabyid_Class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: {}
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/todos', { params: { id: 2 } })
        .then((response) => {
            this.setState({ todo: response.data[0] })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        var { id, title, completed } = this.state.todo
        return (
            <div>
                <h3>Class component</h3>
                <p>id - { id }</p>
                <p>title - { title }</p>
                <p>completed - { completed+"" }</p>
            </div>
        )
    }
}

