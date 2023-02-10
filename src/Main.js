import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoMenu from "./TodoMenu";
import './Main.css'

export default function Main() {
    const [todos, setTodos] = useState([])
    const [visible, setVisible] = useState(todos)
    const [filter, setFilter] = useState('All Todos')
    const [tags, setTags] = useState(["Default"])

    const addTag = (tag) => {
        setTags([...tags, tag])
    }

    const filterTodos = (tag) => {
        setFilter(tag)
        if (filter !== "All Todos") {
            const filteredTodos = todos.filter(todo => todo.tag === filter)
            setVisible(filteredTodos)
        } else {
            setVisible(todos)
        }
    }

    useEffect(() => {
        filterTodos(filter)
    }, [todos, filter])

    return (
        <div id="Main-container">
            <TodoMenu
                setTodos={setVisible}
                tags={tags}
                filterTodos={filterTodos}
                addTag={addTag}
                filter={filter}
            />
            <TodoList
                todos={todos}
                visible={visible}
                tags={tags}
                setTodos={setTodos}
                filter={filter}
                filterTodos={filterTodos}
            />
        </div>
    )
}