import React, { useState } from "react";
import './Todo.css'
import TodoTag from "./TodoTag";

export default function Todo({ id, todo, tag, tags, complete, deleteTodo, edit, toggleComplete, filterTodos }) {
    const [status, setStatus] = useState("todo")
    const [newValue, setNewValue] = useState(todo)
    const [newTag, setNewTag] = useState(tag)

    const handleChange = (evt) => {
        setNewValue(evt.target.value)
    }

    const handleTagChange = (evt) => {
        setNewTag(evt.target.value)
    }

    const startEditing = (evt) => {
        evt.preventDefault()
        setStatus('edit')
    }

    const handleUpdate = (evt) => {
        evt.preventDefault()
        edit(id, newValue, newTag)
        setStatus("todo")
    }

    const confirmDelete = (evt) => {
        evt.preventDefault()
        setStatus("confirm")
    }

    const handleYes = (evt) => {
        evt.preventDefault()
        deleteTodo(id)
    }

    const handleNo = (evt) => {
        evt.preventDefault()
        setStatus("todo")
    }

    const handleToggle = (evt) => {
        evt.preventDefault()
        toggleComplete(id)
    }

    let result;
    if (status === "edit") {
        result =
        <>
            <form id="Edit-form" onSubmit={handleUpdate}>
                <label hidden htmlFor='edit'></label>
                <input
                    type='text'
                    name='edit'
                    id='edit'
                    value={newValue}
                    onChange={handleChange}
                />
                <select
                    name='tag'
                    id='tag'
                    value={newTag}
                    type='select'
                    onChange={handleTagChange}>
                    {tags.map(tag => (
                        <option value={tag}>{tag}</option>
                    ))}
                </select>
                <button>
                    <span class="material-symbols-outlined">
                        save
                    </span>
                </button>
            </form>
            </>
    } else if (status === "confirm") {
        result =
            <>
                <div className="Confirm-text">
                    <li>Are you sure you want to delete?</li>
                </div>
                <div className="Buttons-container">
                    <button className="Confirm-button" onClick={handleNo}><span class="material-symbols-outlined">
                        close
                    </span></button>
                    <button className="Confirm-button" onClick={handleYes}><span class="material-symbols-outlined">
                        check
                    </span></button>
                </div>
            </>
    }
    else {
        result =
        <>
                <div className="Todo-text">
                    <li className={complete ? 'Complete' : ''} onClick={handleToggle}>{todo}</li>
                </div>
                <div className="Todo-tag">
                    <TodoTag filterTodos={filterTodos} tag={tag} />
                </div>
                <div className="Buttons-container">
                    <button className="Todo-button" onClick={confirmDelete}>
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                    <button className="Todo-button" onClick={startEditing}>
                        <span class="material-symbols-outlined">
                            edit
                        </span>
                    </button>
                </div>
                </>
    }
    return (
        <div className="Todo">
            {result}
            </div>
    )
    

}