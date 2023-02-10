import React from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css'

export default function TodoList({ todos, visible, tags, filter, setTodos, filterTodos }) {

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    const editTodo = (id, updatedTitle, updatedTag) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: updatedTitle, tag: updatedTag };
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const toggleComplete = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const list = visible.map(todo => {
        if (!todo.complete) {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todo={todo.title}
                    tag={todo.tag}
                    tags={tags}
                    complete={todo.complete}
                    deleteTodo={deleteTodo}
                    edit={editTodo}
                    toggleComplete={toggleComplete}
                    filterTodos={filterTodos}
                />
            )
        }
    })

    const completeList = visible.map(todo => {
        if (todo.complete) {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todo={todo.title}
                    tag={todo.tag}
                    tags={tags}
                    complete={todo.complete}
                    deleteTodo={deleteTodo}
                    edit={editTodo}
                    toggleComplete={toggleComplete}
                    filterTodos={filterTodos}
                />
            )
        }
    })

    return (
        <div className="TodoList">
            <h1>TooDew List</h1>
            <NewTodoForm
                addTodo={addTodo}
                tags={tags}
            />
            <p>Showing {filter !== 'All Todos' && "todos from"} <b>{filter}</b></p>
            <ul id="TodoList-container">
                {list}
            </ul>
            <hr></hr>
            <ul id="TodoList-complete">
                {completeList}
            </ul>
        </div>
    )
}