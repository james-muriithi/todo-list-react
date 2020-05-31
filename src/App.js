import React from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from './components/layouts/Header';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    todos: [],
    completed: []
  }

  componentDidMount() {
    const data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
      todos: [],
      completed: []
    };
    let {todos, completed} = data
    if (!todos) todos = [];
    if(!completed) completed = [];
    
    this.setState({todos,completed})
  }

  updateLocalStorage = () => {
    const { todos, completed } = this.state
    console.log(this.state.todos);
    localStorage.setItem('todoList', JSON.stringify({ todos, completed }));
  }

  delTodo = (id) => {
    let { todos, completed } = this.state
    this.setState({
      todos : [...todos.filter(todo => todo.id !== id)],
      completed: [...completed.filter(todo => todo.id !== id)]
    }, () => this.updateLocalStorage());
    
  }

  addTodo = (task) => {
    const newTodo = {
      id: uuidv4(),
        title: task
    }

    this.setState({ todos: [ newTodo, ...this.state.todos ] },() => this.updateLocalStorage())

    
  }

  toggleCompleted = (id) => {
    let { todos, completed } = this.state
    if (completed.filter(todo => todo.id === id).length === 0){
      this.setState({
        todos: [ ...todos.filter(todo => todo.id !== id) ],
        completed: [ ...completed, ...todos.filter(todo => todo.id === id) ]
      }, () => this.updateLocalStorage());
    }else{
      this.setState({
        todos: [ ...todos, ...completed.filter(todo => todo.id === id) ],
        completed: [ ...completed.filter(todo => todo.id !== id) ]
      }, () => this.updateLocalStorage());
    }
    
  }

  render(){
    return (
      <div className="App">
        <Header addTodo={this.addTodo} />
        <div className="container">
          {/*  Uncompleted tasks */}
        <ul className="todo" id="todo">
            <Todos todos={this.state.todos} delTodo={this.delTodo} toggleCompleted={this.toggleCompleted} />
        </ul>
          {/* Completed tasks */}
        <ul className="todo" id="completed">
            <Todos todos={this.state.completed} delTodo={this.delTodo} toggleCompleted={this.toggleCompleted} />
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
