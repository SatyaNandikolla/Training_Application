import React, { useState } from 'react'
import axios from 'axios'

export default function Post_Function() {
    
    var [ todo, setTodo ] = useState({ "title": "", "completed": false })

    function submitForm() {
        axios.post('http://jsonplaceholder.typicode.com/todos', todo)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <h3>Functional Component</h3>
            <div>
                <label>Title</label>
                <input type="text" onChange={(e) => setTodo((prevState) => ({ ...prevState, "title": e.target.value })) } />
            </div>
            <div>
                <label>Completed</label>
                <input type="radio" name="fc_completed" onChange={(e) => setTodo((prevState) => ({ ...prevState, "completed": true })) }  />Yes
                <input type="radio" name="fc_completed" onChange={(e) => setTodo((prevState) => ({ ...prevState, "completed": false })) } />No
            </div>
            <div>
                <button onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}

