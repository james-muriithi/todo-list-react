import React, { Component, Fragment } from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

class Header extends Component {
    constructor() {
        super();

        this.input = React.createRef();
    }

    state = {
        task:'',
    }

    onChange = (e) => this.setState({task: e.target.value})
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.task === '') {
            toastr.options = {
                positionClass: 'toast-bottom-left',
            }
            toastr.error('Please provide a task. The task cannot be empty','Ooops!' )
            this.input.current.focus();
            return;
        }
        this.props.addTodo(this.state.task);
        this.setState({ task: '' })
    }

    

    render() {
        return (
            <Fragment>
                <header>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" 
                            autoFocus 
                            autoComplete="off"
                            placeholder="Enter an activity..."
                            id="item" name="todo_item" onChange={this.onChange}
                            value={this.state.task}
                            ref={this.input}
                            aria-label="Type a task"
                        />
                        <button id="add" type="submit" aria-label="Add a task">
                            <i className="fa fa-plus text-white fs-19"></i>
                        </button>
                    </form>
            </header>
            </Fragment>
        )
    }
}

export default Header;
