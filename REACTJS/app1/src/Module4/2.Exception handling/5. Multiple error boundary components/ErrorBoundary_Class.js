import React, { Component } from 'react'

class ErrorBoundary_Class extends Component {

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
            return <h1>Class Component - Error occurred. - { this.props.todo.title }</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary_Class