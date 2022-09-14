import React, { Component } from 'react'
import axios from 'axios'
import GetDataonButtonClick_Todo from './GetDataonButtonClick_Todo'

export default class GetDataonButtonClick_Class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }

        this.getTodoList = this.getTodoList.bind(this)
    }

    getTodoList() {
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
                <button onClick={this.getTodoList}>Get Todo List</button>
                {
                    this.state.todos.map( todo => <GetDataonButtonClick_Todo key={ todo.id } todo={ todo } /> )
                }
            </div>
        )
    }
}

