import React, { Component } from 'react'
import { Navigate } from "react-router-dom";

export default class Redirecting_Class extends Component {
    
    render() {
        console.log("redirecting in Todo_Class")
        var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };

        return (
            <Navigate to="/updated-class" />
        )
    }
}
