import React, { Component } from 'react'

 export default class IndexasKey_Class extends Component {

    render() {
        
        var todos = this.props.todos;

        return (
            <div>
                <h2>Class Component</h2>
                {
                    todos.map( (todo, index) => <p key={ index }>{ todo }</p> )
                }
            </div>
        )
    }
}

