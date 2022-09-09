import React from 'react'

export default function React_Function(){

        
        return (
            /*<div id="cc_hello" style: { color: "orange" }>
                <h2>Class Component - Hello World</h2>
            </div>*/

            React.createElement(
                'div', 
                { id: 'cc_hello', style: { color: "orange" } }, 
                React.createElement('h2', null, 'Functional Component - Hello World')
            )
        )
    }