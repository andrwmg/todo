import React from "react";
import "./TodoTag.css"

export default function TodoTag({tag, filter, filterTodos}) {

    const handleFilter = (evt) => {
        evt.preventDefault()
        filterTodos(tag)
    }

    return (
        <button className={"TodoTag " + (filter === tag && "active")} onClick={handleFilter}>{tag}</button>
    )
}