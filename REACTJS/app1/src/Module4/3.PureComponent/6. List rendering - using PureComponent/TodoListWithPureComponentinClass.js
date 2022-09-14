import React, { useState } from 'react'
import ListRenderingWithPureComponentinClass from './ListRenderingWithPureComponentinClass'


export default function TodoListWithPureComponentinClass() {

    var [ todoList, setTodoList ] = useState([createTodo(1)])

    function createTodo(id) {
        return { "id": id, "title": "Learn JSF"+id, "description": "Finish this article"+id, "priority": 5 }
    }

    function push() {
        todoList.push(createTodo(todoList.length+1))
        setTodoList([...todoList])
    }

    function pop() {
        todoList.pop()
        setTodoList([...todoList])
    }

    function modify() {
        todoList[todoList.length-1] = {...todoList[todoList.length-1], "priority" : todoList[todoList.length-1].priority+1 }
        setTodoList([...todoList])
    }

    return (
        <div>
            {
                todoList.map( todo => <ListRenderingWithPureComponentinClass key={ todo.id } todo={ todo } /> )
            }

            <button onClick={ push }>Push</button>
            <button onClick={ pop }>Pop</button>
            <button onClick={ modify }>Modify</button>
        </div>
    )
}
