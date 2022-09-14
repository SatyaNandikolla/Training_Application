import React, { useState } from 'react'

function WithCounter1(OriginalComponent) {
    function NewComponent() {
        var [ count, setCount ] = useState(0)

        function incrementCount() {
            setCount((prevState) => (prevState + 1))
        }

        function decrementCount() {
            setCount((prevState) => (prevState - 1))
        }
        
        return <OriginalComponent count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
    }

    return NewComponent
}

export default WithCounter1
