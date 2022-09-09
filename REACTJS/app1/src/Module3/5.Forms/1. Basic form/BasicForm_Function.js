import React from 'react'

export default function BasicForm_Function() {
    
    function submitForm() {
        var todo = {
            "title": document.getElementById("title").value,
            "description": document.getElementById("description").value,
            "priority": parseInt(document.getElementById("priority").value)
        }

        console.log(todo)
    }

    return (
        <div>
            <h3>Functional Component</h3>
            <div>
                <label>Title</label>
                <input type="text" id="title" />
            </div>
            <div>
                <label>Description</label>
                <textarea id="description"></textarea>
            </div>
            <div>
                <label>Priority</label>
                <select id="priority">
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
