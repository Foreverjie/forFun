import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {

  render() {
    // console.log(this.props.todos)
    return <h3 key={this.props.todo.id}>{ this.props.todo.title }</h3>
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem