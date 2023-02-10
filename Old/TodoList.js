import React, { Component } from "react";
import Todo from "../src/Todo";
import NewTodoForm from "../src/NewTodoForm";
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }
    addTodo(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] })
    }
    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    editTodo(id, updatedTitle) {
        let updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: updatedTitle };
            }
            return todo;
        })
        this.setState({ todos: updatedTodos })
    }
    toggleCompletion(id) {
        let updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        })
        this.setState({ todos: updatedTodos })
    }
    render() {
        const list = this.state.todos.map(todo =>
            <Todo
                key={todo.id}
                id={todo.id}
                todo={todo.title}
                complete={todo.complete}
                deleteTodo={this.deleteTodo}
                edit={this.editTodo}
                toggleComplete={this.toggleCompletion}
            />
        )
        return (
            <div className="TodoList">
                <h1>React ToDo List
                <span>Simple React App</span>
                </h1>
                <NewTodoForm
                    addNewTodo={this.addTodo}
                />
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default TodoList