import React, { useContext } from 'react'
import TodoContext4 from './TodoContext4';
import MetadataContext2 from './MetadataContext2';

export default function Todo_Function(props) {

    var todo = useContext(TodoContext4)
    var metadata = useContext(MetadataContext2)

    return (
        <div>
            <h2>Functional Component</h2>
            <p>id - { todo.id }</p>
            <p>title - { todo.title }</p>
            <p>description - { todo.description }</p>
            <p>priority - { todo.priority }</p>
            <p>createdBy - { metadata.createdBy }</p>
            <p>reviewedBy - { metadata.reviewedBy }</p>
        </div>
    )
}

