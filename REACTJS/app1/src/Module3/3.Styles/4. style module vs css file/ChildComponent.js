import React from 'react'

function ChildComponent(props) {

    const { description, priority, completed } = props;

    return (
        <div>
            <p className="green">description - { description }</p>
            <p className="green bold">priority - { priority }</p>
             {/* <p className={ todoStyles.orange }>completed - { completed + '' }</p>  */}
        </div>
    )
}

export default ChildComponent