import React , { Component }from 'react'
import './App.css'
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'a',
        completed: false
      },
      {
        id: 2,
        title: 'b',
        completed: false
      },
      {
        id: 3,
        title: 'c',
        completed: false
      },
    ]
  }


  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <h1>Hello</h1>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App
