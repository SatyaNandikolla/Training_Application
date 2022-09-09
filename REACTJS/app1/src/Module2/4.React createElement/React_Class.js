import React, { Component } from 'react'

export default class React_Class extends Component {

    render() {
        
        return (
            /*<div id="cc_hello" style: { color: "orange" }>
                <h2>Class Component - Hello World</h2>
            </div>*/

            React.createElement(
                'div', 
                { id: 'cc_hello', style: { color: "orange" } }, 
                React.createElement('h2', null, 'Class Component - Hello World')
            )
        )
    }
}