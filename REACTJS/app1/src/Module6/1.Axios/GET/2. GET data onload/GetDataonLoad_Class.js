import React, { Component } from 'react'
import axios from 'axios'
import GetDataonLoad_Todo from './GetDataonLoad_Todo'

export default class GetDataonLoad_Class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            this.setState({ todos: response.data })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h2>TodoList - Class Component</h2>
                {
                    this.state.todos.map( todo => <GetDataonLoad_Todo key={ todo.id } todo={ todo } /> )
                }
            </div>
        )
    }
}

