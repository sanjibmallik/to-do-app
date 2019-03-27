import React, { Component } from 'react';
import Todo_item from './Todo_item';
import PropTypes from 'prop-types';


class Todos extends Component {
    
  render() {
     //console.log(this.props.todoList)
    return this.props.todoList.map((todo) => (
       <Todo_item key={todo.id} todoItem = { todo } markComplete = {this.props.markComplete}
       delTodo = { this.props.delTodo }/>
    )
    )
}


}

//prop types define
Todos.propTypes = {
    todoList:  PropTypes.array.isRequired
 }

export default Todos;