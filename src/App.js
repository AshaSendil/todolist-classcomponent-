import React, { Component } from "react";
import AddForm from "./AddForm";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addForm = (todo) =>{
todo.id = Math.random()
let todos = [...this.state.todos,todo]
this.setState({
  todos
})
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm  addForm ={this.addForm}/>
      </div>
    );
  }
}

export default App;
