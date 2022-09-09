import React from 'react'

export default function InlineStyles_Function(props) {

    const { todo, color : propsColor } = props;
    const { id, title, description, priority, completed } = todo;

    const style1 = { color: 'orange' };
	const style2 = { color: 'blue', fontStyle: 'italic' };
	const style3 = { color: propsColor };
	const style4 = { color: propsColor, fontWeight: 'bold' };
	const style5 = { ...style2, fontWeight: 'bold' };

    return (
        <div>
            <h2>Functional Component</h2>
            <p style={ style1 }>id - { id }</p>
            <p style={ style2 }>title - { title }</p>
            <p style={ style3 }>description - { description }</p>
            <p style={ style4 }>priority - { priority }</p>
            <p style={ style5 }>completed - { completed + '' }</p>
        </div>
    )
}
