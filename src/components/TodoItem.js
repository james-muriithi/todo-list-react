import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

class TodoItem extends Component {

    showTime =(end) => {
        if (end) {
            return moment(end).fromNow()
        }
    }

    notificationBell = (completed, id) => {
        if (!completed) {
            return(
                <button className="reminder" onClick={this.props.openDialogue.bind(this, id)} >
                    <i className="fa fa-bell fs-19 text-primary"></i>
                </button>
            );
        }
    }

    render() {
        const {id , title, completed, end} = this.props.todo
        return (
            <li> {title} 
            <span>
                {this.showTime(end)}
            </span>
                <div className="buttons" >
                    <button className="remove" onClick={this.props.delTodo.bind(this,id)}>
                        <i className="fa fa-trash fs-19 text-danger"></i>
                    </button>
                    <button className="complete" onClick={this.props.toggleCompleted.bind(this, id)} >
                        <i className="fa fa-check fs-19 text-success"></i>
                    </button>
                    {this.notificationBell(completed , id)}
                </div>
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem