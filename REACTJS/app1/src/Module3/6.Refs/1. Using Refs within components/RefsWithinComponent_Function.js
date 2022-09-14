import React, { useRef } from 'react'

export default function RefsWithinComponent_Function() {
    
    var title = useRef("")
    var description = useRef("")
    var priority = useRef(1)

    function submitForm() {
        var todo = {
            "title": title.current.value,
            "description": description.current.value,
            "priority": priority.current.value
        }

        console.log(todo)
    }

    return (
        <div>
            <h3>Functional Component</h3>
            <div>
                <label>Title</label>
                <input type="text" ref={title} />
            </div>
            <div>
                <label>Description</label>
                <textarea ref={description}></textarea>
            </div>
            <div>
                <label>Priority</label>
                <select ref={priority}>
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
