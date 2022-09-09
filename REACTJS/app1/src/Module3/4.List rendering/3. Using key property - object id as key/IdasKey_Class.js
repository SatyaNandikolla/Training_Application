import React, { Component } from 'react'
import IdasKey from './IdasKey';

export default class IdasKey_Class extends Component {

    render() {
        
        var todos = this.props.todos;
        
        return (
            <div>
                <h2>Class Component</h2>
                {
                    todos.map( todo => <IdasKey key={ todo.id } todo={ todo } /> )
                }
            </div>
        )
    }
}
