import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todo_item extends Component {
  getStyle = ()=>{
return {
  background:'#f4f4f4',
  padding:'6px',
  borderButtom: '2px #ccc dotted',
  textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
}
  }

  render() {
    const { id, task } =  this.props.todoItem;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind
            (this,id)}/> {' '}
        { task }


        <button style={xBtnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
        </p>
      </div>
    )
  }
}
 
//prop types
Todo_item.propTypes = {
  todoItem:PropTypes.object.isRequired
}
const xBtnStyle = {
  color:'white',
  background: 'red',
  float:'right',
  buttonRadius:'10px 10px',

}
export default Todo_item
