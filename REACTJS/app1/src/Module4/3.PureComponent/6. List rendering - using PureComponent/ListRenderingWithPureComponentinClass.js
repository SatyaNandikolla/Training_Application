import React, { PureComponent } from 'react'

export default class ListRenderingWithPureComponentinClass extends PureComponent {

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
