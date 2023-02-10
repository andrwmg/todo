import React, {Component} from "react";
import {v4 as uuidv4} from 'uuid'
import TodoList from "./TodoList";

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {title: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = {...this.state, id:uuidv4(), complete: false}
        this.props.addNewTodo(newTodo)
        this.setState({title: ''})
    }
    render() {
        return (
            <div>
                <h2>New Todo</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title'></label>
                    <input 
                    name='title' 
                    id='title' 
                    value={this.state.title} 
                    type='text'
                    onChange={this.handleChange} />
                                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm