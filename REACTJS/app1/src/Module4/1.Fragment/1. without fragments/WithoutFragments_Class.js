import React, { Component } from 'react'

export default class WithoutFragments_Class extends Component {
    render() {
        var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };

        return (
            <div>
                <td>id - { todo.id }</td>
                <td>title - { todo.title }</td>
                <td>description - { todo.description }</td>
                <td>priority - { todo.priority }</td>
            </div>
        )
    }
}
