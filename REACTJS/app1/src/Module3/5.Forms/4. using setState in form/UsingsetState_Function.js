import React, { useState } from 'react'

export default function UsingsetState__Function() {
    
    var [ todo, setTodo ] = useState({ "title": "", "description": "", priority: 5 })

    const error = { color: 'orange' };

    function submitForm() {
        console.log(todo)
    }

    return (
        <div>
            <h3>Functional Component</h3>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e) => setTodo((prevState) => ({ ...prevState, "title": e.target.value })) } />
                { todo.title === "" && (<span style={ error }>Title cannot be empty</span>) }
            </div>
            <div>
                <label>Description</label>
                <textarea onChange={(e) => setTodo((prevState) => ({ ...prevState, "description": e.target.value })) }></textarea>
                { todo.description === "" && (<span style={ error }>Description cannot be empty</span>) }
            </div>
            <div>
                <label>Priority</label>
                <select onChange={(e) => setTodo((prevState) => ({ ...prevState, "priority": e.target.value })) }>
                    <option value="5">High</option>
                    <option value="3">Medium</option>
                    <option value="1">Low</option>
                </select>
            </div>
            <div>
                <button onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}
