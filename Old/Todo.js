import React, { Component } from "react";
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, edit: this.props.todo, complete: false }
        this.handleClick = this.handleClick.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleClick(evt) {
        evt.preventDefault()
        this.props.deleteTodo(this.props.id)
    }
    toggleForm(evt) {
        evt.preventDefault();
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.edit(this.props.id, this.state.edit)
        this.toggleForm(evt)
    }
    handleToggle(evt) {
        this.props.toggleComplete(this.props.id)
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result =
                <form onSubmit={this.handleUpdate}>
                    <label htmlFor='edit'></label>
                    <input
                        type='text'
                        name='edit'
                        id='edit'
                        value={this.state.edit}
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
        } else {
            result =
                <div className="Todo">
                    <button onClick={this.handleClick}>Delete</button>
                    <button onClick={this.toggleForm}>Edit</button>
                    <li className={this.props.complete ? 'Complete' : ''} onClick={this.handleToggle}>{this.props.todo}</li>
                </div>
        }
        return result
    }
}

export default Todo