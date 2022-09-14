import React, { Component } from 'react'

export default class ObjectasKey_Class extends Component {

    render() {
        
        var todos = this.props.todos;

        return (
            <div>
                <h2>Class Component</h2>
                {
                    todos.map( todo => <p key={ todo }>{ todo }</p> )
                }
            </div>
        )
    }
}
