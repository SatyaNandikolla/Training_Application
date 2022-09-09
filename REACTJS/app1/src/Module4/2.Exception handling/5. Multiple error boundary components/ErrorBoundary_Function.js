import React, { Component } from 'react'

class ErrorBoundary_Function extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.hasError) {
           return <h1>Functional Component - Error occurred. - { this.props.todo.title }</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary_Function