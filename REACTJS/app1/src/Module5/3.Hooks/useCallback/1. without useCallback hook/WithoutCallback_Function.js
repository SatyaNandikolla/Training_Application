import React, { useState } from 'react'
import WithoutCallback_Title from './WithoutCallback_Title';
import WithoutCallback_IncrementButton from './WithoutCallback_IncrementButton';
import WithoutCallback_ToggleButton from './WithoutCallback_ToggleButton';

export default function WithoutCallback_Function(props) {

    const [title, setTitle] = useState("Learn JSF");
    const [priority, setPriority] = useState(1)
    const [completed, setCompleted] = useState(false)
    
    const incrementPriority = () => {
        setPriority(prevState => prevState + 1)
    }

    const toggleCompleted = () => {
        setCompleted(prevState => !prevState)
    }

    return (
        <div>
            <WithoutCallback_Title text={ title } />
            <WithoutCallback_IncrementButton value={ priority } callbackFunc={ incrementPriority } /><br/><br/>
            <WithoutCallback_ToggleButton value={ completed } callbackFunc={ toggleCompleted } />
        </div>
    )
}
