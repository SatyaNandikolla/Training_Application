import React, { Component } from 'react'

export default class PropsandState_Class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 2,
            title: "Stop drinking to much coffee",
            description: "Coffee is evil!",
            priority: 3
        }
    }

    render() {
        const { id : propsId, title : propsTitle, description : propsDescription, priority : propsPriority } = this.props;
        const { id : stateId, title : stateTitle, description : stateDescription, priority : statePriority } = this.state;

        return (
            <div>
                <h2>Class Component</h2>
                <h3>Props</h3>
                <p>id - { propsId }</p>
                <p>title - { propsTitle }</p>
                <p>description - { propsDescription }</p>
                <p>priority - { propsPriority }</p>

                <h3>State</h3>
                <p>id - { stateId }</p>
                <p>title - { stateTitle }</p>
                <p>description - { stateDescription }</p>
                <p>priority - { statePriority }</p>
            </div>
        )
    }
}

