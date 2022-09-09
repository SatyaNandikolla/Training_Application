import React, { useState } from 'react'

export default function Child_Function(props) {
    
    var [ todo, setTodo ] = useState({ "title": "", "description": "", priority: 5 })

    const error = { color: 'orange' };

    return (
        <div>
            <h3>Functional Component</h3>
            <div>
                <label>Title</label>
                <input type="text" ref={props.title} onChange={(e) => setTodo((prevState) => ({ ...prevState, "title": e.target.value })) } />
                { todo.title === "" && (<span style={ error }>Title cannot be empty</span>) }
            </div>
            <div>
                <label>Description</label>
                <textarea ref={props.description} onChange={(e) => setTodo((prevState) => ({ ...prevState, "description": e.target.value })) }></textarea>
                { todo.description === "" && (<span style={ error }>Description cannot be empty</span>) }
            </div>
            <div>
                <label>Priority</label>
                <select ref={props.priority} onChange={(e) => todo.priority = parseInt(e.target.value) }>
                    <option value="5">High</option>
                    <option value="3">Medium</option>
                    <option value="1">Low</option>
                </select>
            </div>
        </div>
    )
}
