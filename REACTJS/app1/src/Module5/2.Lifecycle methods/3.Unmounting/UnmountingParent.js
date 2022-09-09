import React, { useState } from 'react'
import Unmounting_Class from './UnMounting_Class';

export default function UnmountingParent() {
    var [showTodo, setShowTodo] = useState(true)

    return (
        <div>
            { showTodo && <Unmounting_Class/>}
            <button onClick={ () => setShowTodo(!showTodo) }>Toggle Show Todo</button>
        </div>
    )
}

