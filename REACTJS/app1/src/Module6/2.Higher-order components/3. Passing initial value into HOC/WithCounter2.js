import React, { useState } from 'react'

function WithCounter2(OriginalComponent, initialCount) {
    function NewComponent() {
        var [ count, setCount ] = useState(initialCount)

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

export default WithCounter2
