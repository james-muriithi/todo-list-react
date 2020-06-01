import React from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from './components/layouts/Header';
import Dialog from './components/layouts/Dialog';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    todos: [],
    completed: [],
    open: false,
    task_id: ''
  }

  openDialogue = (id) => {
    this.setState({ open: true, task_id: id });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
        title: task,
        completed: false
    }

    this.setState({ todos: [ newTodo, ...this.state.todos ] },() => this.updateLocalStorage())

    
  }

  setReminder = (dateTime) => {
    const {open, task_id, todos} = this.state
    if(open && task_id){
      
      this.setState({ todos: todos.map(task => {
        if(task.id === task_id){
          task.end = dateTime
        }
        return task;
      })
      }, () => this.updateLocalStorage())
    }
    this.handleClose()
  }

  toggleCompleted = (id) => {
    let { todos, completed } = this.state

    let task = completed.filter(task => task.id === id).length === 0 ? 
      todos.filter(task => task.id === id) : completed.filter(task => task.id === id);
    task = task[0];

      if(task && task.completed){
      task.completed = false;
      this.setState({
        todos: [ ...todos, task],
        completed: [ ...completed.filter(todo => todo.id !== id) ]
      }, () => this.updateLocalStorage());
    }else{
      task.completed = true;
      this.setState({
        todos: [ ...todos.filter(todo => todo.id !== id) ],
        completed: [ ...completed, task ]
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
            <Todos todos={this.state.todos} delTodo={this.delTodo} toggleCompleted={this.toggleCompleted} openDialogue={this.openDialogue} />
          </ul>
            {/* Completed tasks */}
          <ul className="todo" id="completed">
              <Todos todos={this.state.completed} delTodo={this.delTodo} toggleCompleted={this.toggleCompleted} />
          </ul>
        </div>
        {/* dialogue */}
        <Dialog handleClose={this.handleClose} open={this.state.open} setReminder={this.setReminder} >

        </Dialog>
      </div>
    );
  }
}

export default App;
