import React, { Component } from 'react'

class TodoItem extends Component {

  render() {
    // console.log(this.props.todos)
    return <h3 key={this.props.todo.id}>{ this.propstodo.title }</h3>
  }
}

export default TodoItem