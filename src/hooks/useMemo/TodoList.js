import React, {useMemo, useState} from 'react'
import {creatrTodos} from "../../utils";

const TodoList = () => {

    const [isActive, setActive] = useState(false)
    const todos = creatrTodos()

    const visibleTodos = useMemo(() => todos.filter((todo) => {
        if (isActive) {
            return !todo.completed
        } else if (!isActive) {
            return todo.completed
        }
    }), [todos])


    return <ul>
        {visibleTodos.map((todos) => (<li key={todos.id}>{todos.text}</li>))}


        <button onClick={() => setActive((prevState) => !prevState)}>Изменить</button>
    </ul>
}


export default TodoList