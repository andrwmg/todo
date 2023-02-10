import React, { useState } from "react";
import './TodoMenu.css'
import TodoTag from "./TodoTag";

export default function TodoMenu({tags, filterTodos, addTag, filter}) {

    const [status, setStatus] = useState('')
    const [tag, setTag] = useState('')

    const handleStart = (evt) => {
        evt.preventDefault()
        setStatus('add')
    }

    const handleChange = (evt) => {
        setTag(evt.target.value)
    }

    const handleAdd = (evt) => {
        evt.preventDefault()
        addTag(tag)
        setTag('')
        setStatus('')
    }


    let result;
    if (status === "add") {
        result =
            <form id="TodoTag-form" onSubmit={handleAdd}>
                <label hidden htmlFor='tag'></label>
                <input
                required
                    type='text'
                    name='tag'
                    id='tag'
                    value={tag}
                    onChange={handleChange}
                    placeholder="Add a tag"
                    maxLength={10}
                />
                <button><span class="material-symbols-outlined">
save
</span></button>
            </form>
    } else {
        result =
        <div className="Button-container">
                <button className="Confirm-button" onClick={handleStart}>+</button>
            </div>
    }  

        return (
            <div className="TodoMenu">
                <h1>Tags
                </h1>
                <ul id="TodoMenu-container">
                    <TodoTag filter={filter} tag="All Todos" filterTodos={filterTodos} />
                </ul>
                <hr></hr>
                <ul id="TodoMenu-complete">
                    {tags.map(tag=> (
                        <TodoTag filter={filter} tag={tag} filterTodos={filterTodos}>{tag}</TodoTag>
                    ))}
                </ul>
                {result}
            </div>
        )
}