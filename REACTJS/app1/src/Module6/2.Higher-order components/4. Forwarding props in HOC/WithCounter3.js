import React, { useState } from 'react'

export default function WithCounter3(OriginalComponent) {
    function NewComponent(props) {
        var [ count, setCount ] = useState(props.todo.priority)

        function incrementCount() {
            setCount((prevState) => (prevState + 1))
        }

        function decrementCount() {
            setCount((prevState) => (prevState - 1))
        }
        
        return <OriginalComponent { ...props } count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
    }

    return NewComponent
}
