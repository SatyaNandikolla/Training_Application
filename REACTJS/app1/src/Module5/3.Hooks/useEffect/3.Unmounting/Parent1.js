import React, { useState } from 'react'
import Unmounting_Function from './Unmounting_Function';

export default function Parent1() {
    var [showTodo, setShowTodo] = useState(true)

    return (
        <div>
            { showTodo && <Unmounting_Function /> }
            <button onClick={ () => setShowTodo(!showTodo) }>Toggle Show Todo</button>
        </div>
    )
}
