
import React, { useContext } from 'react'
import TodoContext4 from './TodoContext4';
import MetadataContext2 from './MetadataContext2';

export default function PartialContextSharing_Component3(props) {

    var todo = useContext(TodoContext4)
    var metadata = useContext(MetadataContext2)

    return (
        <div>
            <h2> Component3</h2>
            {/* We only access the title in todoContext because it is default */}
            <p>title - { todo.title }</p>
            <p>createdBy - { metadata.createdBy }</p>
            <p>reviewedBy - { metadata.reviewedBy }</p>
        </div>
    )
}

 

