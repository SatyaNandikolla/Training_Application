import React from 'react'

function PureComponentListinFunctionalComponent(props) {

    const { id, title, description, priority } = props.todo;
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

export default React.memo(PureComponentListinFunctionalComponent)
