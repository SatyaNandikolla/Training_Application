import React from 'react'
import ContextProvider_Function from './ContextProvider_Function';
import ContextProvider_Class from './ContextProvider_Class';

export default function ContextProvider_Component2(props) {

    return (
        <div>
            <ContextProvider_Function />

            <ContextProvider_Class />
        </div>
    )
}
