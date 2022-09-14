import React from 'react'

const TodoContext = React.createContext({ "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 })

export default TodoContext
