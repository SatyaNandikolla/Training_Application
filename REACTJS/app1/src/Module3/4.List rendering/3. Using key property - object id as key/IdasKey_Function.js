import React from 'react'
import IdasKey from './IdasKey';

export default function IdasKey_Function(props) {

    var todos = props.todos

    return (

        <div>
            <h2>Functional Component</h2>
            {
                todos.map( todo => <IdasKey key={ todo.id } todo={ todo } /> )
            }
        </div>
    )
}
