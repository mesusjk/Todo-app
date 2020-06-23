import React, {Component} from 'react';
import './App.css';

// Components
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";

class App extends Component {

  state = {
    statusDone: false,
    showTodos: "All",
    todos: []
  }

  addTodo(text) {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          { key: Date.now(), done: false, text: text, show: "All" }
        ]
      }
    })
  }

  toggleTodo(key) {
    const {todos} = this.state;

    let item = todos.find(item => item.key === key);
    item.done = !item.done

    let newTodos = todos.filter(item => item.key !== key);

    this.setState({
      todos: [
        ...newTodos,
        item,
      ]
    })
  }

  filterActive() {
    let {todos} = this.state;
    this.setState({showTodos: "Active"})
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done === false) {
        todos[i].show = "Active";
      }
    }
  }

  filterCompleted() {
    let {todos} = this.state;
    this.setState({showTodos: "Completed"})
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done === true) {
        todos[i].show = "Completed";
      }
    }
  }

  filterNothing() {
    let {todos} = this.state;
    this.setState({showTodos: "All"});
    for (let i = 0; i < todos.length; i++) {
      todos[i].show = "All";
    }
  }

  deleteTodo(key) {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => item.key !== key)
      }
    })
  }

  deleteInactiveTodo() {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos.filter(item => item.done !== true)
        ]
      }
    })
  }

  render() {

    let { todos, showTodos } = this.state;

    let filterTodos = todos.filter(item => item.show === showTodos);

    return (
      <div id="todoapp" className="todoapp">
        <Header submit={this.addTodo.bind(this)} />

        <section className="main">
        <ul className="todo-list">
          {
            filterTodos.length == 0 ?
            <p className="empty-alert">There isn't any todo</p> :
            filterTodos.map(item => <TodoItem 
              key={item.key}
              text={item.text}
              item={item}
              done={this.toggleTodo.bind(this)}
              delete={this.deleteTodo.bind(this)}
              />)
          }
        </ul>

        <div className="buttons">
          <button onClick={this.filterNothing.bind(this)} className="filter-btn" type="button">All</button>
          <button onClick={this.filterActive.bind(this)} className="filter-btn" type="button">Active</button>
          <button onClick={this.filterCompleted.bind(this)} className="filter-btn" type="button">Completed</button>
          <button onClick={this.deleteInactiveTodo.bind(this)} className="filter-btn" type="button">delete All Completed</button>
        </div>

        <div className="todo-length"><p>{`${filterTodos.length} todo`}</p></div>
      </section>

      </div>
    );
  }
}

export default App;