import React, { useState } from 'react'

export default function Math1(OriginalComponent) {
    function NewComponent() {
        function add(x, y) {
            return x + y
        }

        function subtract(x, y) {
            return x - y
        }

        function multiply(x, y) {
            return x * y
        }

        function divide(x, y) {
            return x / y
        }
        
        return <OriginalComponent add={add} subtract={subtract} multiply={multiply} divide={divide} />
    }

    return NewComponent
}
