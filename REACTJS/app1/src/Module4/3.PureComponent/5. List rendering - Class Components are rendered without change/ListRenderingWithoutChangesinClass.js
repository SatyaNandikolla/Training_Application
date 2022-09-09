import React, { Component } from 'react'

export default class ListRenderingWithoutChangesinClass extends Component {

    render() {
        
        const { id, title, description, priority } = this.props.todo;
        console.log(`Rendered Todo - ${id}`)

        return (
            <div>
                <h3>Todo { id }</h3>
                <p>title - { title }</p>
                <p>description - { description }</p>
                <p>priority - { priority }</p>
            </div>
        )
    }
}

