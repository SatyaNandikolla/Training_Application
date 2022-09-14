import React, { Component } from 'react'
import TodoContext3 from './TodoContext3';
import MetadataContext from './MetadataContext';

export default class NestedContext_Class extends Component {

    render() {

        return (
            <TodoContext3.Consumer>
                {todo => ( 
                    <MetadataContext.Consumer>
                        {metadata => ( 
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
                    </MetadataContext.Consumer>
                )}
            </TodoContext3.Consumer>
        )
    }
}
