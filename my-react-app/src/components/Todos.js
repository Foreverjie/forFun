import React, { Component } from 'react'
import { List } from 'antd'
import PropTypes from 'prop-types'

class Todos extends Component {

  render() {
    // console.log(this.props.todos)
    return <List
            bordered
            dataSource={this.props.todos}
            renderItem={todo => (
              <List.Item>
                {todo.title}
              </List.Item>
            )}
          />
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos