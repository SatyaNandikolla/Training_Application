import React, { Component } from 'react'
import Child_Class from './Child_Class';
import Child_Function from './Child_Function';

export default class Parent extends Component {

    constructor(props) {
        super(props)

        this.title = React.createRef()
        this.description = React.createRef()
        this.priority = React.createRef()

        this.printTodo = this.printTodo.bind(this)
    }

    printTodo() {
        console.log("title: " + this.title.current.value)
        console.log("description: " + this.description.current.value)
        console.log("priority: " + this.priority.current.value)
    }

    render() {

        if(this.props.isFunctionalChild) {
            
            return (

                <div>
                    <Child_Function title={this.title} description={this.description} priority={this.priority} />
                    <div>
                        <button onClick={this.printTodo}>Print Todo</button>
                    </div>
                </div>
            )
        } else {

            return (

                <div>
                    <Child_Class title={this.title} description={this.description} priority={this.priority} />
                    <div>
                        <button onClick={this.printTodo}>Print Todo</button>
                    </div>
                </div>
            )
        }
    }
}