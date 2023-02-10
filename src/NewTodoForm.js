import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import "./NewTodoForm.css";

export default function NewTodoForm({ addTodo, tags }) {

    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('Default')

    const handleTitleChange = (evt) => {
        setTitle(evt.target.value)
    }

    const handleTagChange = (evt) => {
        setTag(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (title) {
            const newTodo = { title: title, tag: tag, id: uuidv4(), complete: false }
            addTodo(newTodo)
            setTitle('')
        }
    }
    return (
        <div id="NewTodo">
            <h2>New Todo</h2>
            <form id="NewTodo-form" onSubmit={handleSubmit}>
                <label hidden htmlFor='title'></label>
                <input
                    required
                    name='title'
                    id='title'
                    value={title}
                    type='text'
                    onChange={handleTitleChange}
                    placeholder="Add todo text"
                    maxLength={50}
                    />
                <select
                    name='tag'
                    id='tag'
                    value={tag}
                    type='select'
                    onChange={handleTagChange}>
                        {tags.map(tag => (
                            <option value={tag}>{tag}</option>
                        ))}
                    </select>
                <button><span class="material-symbols-outlined">
add_task
</span></button>
            </form>
        </div>
    )
}