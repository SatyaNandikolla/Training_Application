import React from 'react'
import { Navigate } from "react-router-dom";

export default function Redirecting_Function(props) {

    console.log("redirecting in Todo_Function")
    var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };

    return (
        <Navigate to="/updated-func" />
    )
}
