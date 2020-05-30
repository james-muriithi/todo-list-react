import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from "prop-types";

class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) => (        
            <TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo} toggleCompleted={this.props.toggleCompleted} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;