import React from 'react'

export default function Onchange_Function() {
    
    var todo = { "title": "", "description": "", "priority": 5 }

    function submitForm() {
        console.log(todo)
    }

    return (
        <div>
            <h3>Functional Component</h3>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e) => todo.title = e.target.value } />
            </div>
            <div>
                <label>Description</label>
                <textarea onChange={(e) => todo.description = e.target.value }></textarea>
            </div>
            <div>
                <label>Priority</label>
                <select onChange={(e) => todo.priority = parseInt(e.target.value) }>
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
