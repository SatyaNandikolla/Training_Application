import React, { useContext } from 'react'
import TodoContext3 from './TodoContext3';
import MetadataContext from './MetadataContext';

export default function NestedContext_Function(props) {

    var todo = useContext(TodoContext3)
    var metadata = useContext(MetadataContext)

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
