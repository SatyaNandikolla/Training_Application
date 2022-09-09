import React, { Component } from 'react'
import TodoContext4 from './TodoContext4';
import MetadataContext2 from './MetadataContext2';

export default class PartialContextSharing_Class extends Component {

    render() {

        return (
            <MetadataContext2.Consumer>
                {metadata => ( 
                    <TodoContext4.Consumer>
                        {todo => ( 
                            <div>
                                <h2>Class Component</h2>
                                <p>id - { todo.id }</p>
                                <p>title - { todo.title }</p>
                                <p>description - { todo.description }</p>
                                <p>priority - { todo.priority }</p>
                                <p>createdBy - { metadata.createdBy }</p>
                                <p>reviewedBy - { metadata.reviewedBy }</p>
                            </div>
                        )}
                    </TodoContext4.Consumer>
                )}
            </MetadataContext2.Consumer>
        )
    }
}
