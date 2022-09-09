import React, { Component } from 'react'
import Math1 from './Math1'

class Todo1_Class extends Component {

    render() {
        var a=3, b=4
        const { multiply, divide } = this.props

        return (
            <div>
                <h2>Class Component</h2>
                <p>a - {a}</p>
                <p>b - {b}</p>
                <p>a * b = { multiply(a, b) }</p>
                <p>a / b = { divide(a, b) }</p>
            </div>
        )
    }
}

export default Math1(Todo1_Class)
