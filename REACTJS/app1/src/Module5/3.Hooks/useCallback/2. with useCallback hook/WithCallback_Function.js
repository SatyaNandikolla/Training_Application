import React, { useState, useCallback } from 'react'
import WithCallback_Title from './WithCallback_Title';
import WithCallback_IncrementButton from './WithCallback_IncrementButton';
import WithCallback_ToggleButton from './WithCallback_ToggleButton';

export default function WithCallback_Function(props) {

    const [title, setTitle] = useState("Learn JSF");
    const [priority, setPriority] = useState(1)
    const [completed, setCompleted] = useState(false)
    
    const incrementPriority = useCallback(() => {
        setPriority(prevState => prevState + 1)
    }, [priority])

    const toggleCompleted = useCallback(() => {
        setCompleted(prevState => !prevState)
    }, [completed])

    return (
        <div>
            <WithCallback_Title text={ title } />
            <WithCallback_IncrementButton value={ priority } callbackFunc={ incrementPriority } /><br/><br/>
            <WithCallback_ToggleButton value={ completed } callbackFunc={ toggleCompleted } />
        </div>
    )
}
