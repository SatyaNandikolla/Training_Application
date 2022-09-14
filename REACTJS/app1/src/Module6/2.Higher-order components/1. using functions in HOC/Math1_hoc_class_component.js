import React, { Component } from 'react'

export default function Math1(OriginalComponent) {
    class NewComponent extends Component {
        add(x, y) {
            return x + y
        }

        subtract(x, y) {
            return x - y
        }

        multiply(x, y) {
            return x * y
        }

        divide(x, y) {
            return x / y
        }
        
        render() {
            return <OriginalComponent add={this.add} subtract={this.subtract} multiply={this.multiply} divide={this.divide} />
        }
    }

    return NewComponent
}

