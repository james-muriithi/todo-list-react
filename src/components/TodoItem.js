import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    render() {
        const {id , title} = this.props.todo
        return (
            <li> {title} 
                <div className="buttons" >
                    <button className="remove" onClick={this.props.delTodo.bind(this,id)}>
                        <i className="fa fa-trash fs-19 text-danger"></i>
                    </button>
                    <button className="complete" onClick={this.props.toggleCompleted.bind(this, id)} >
                        <i className="fa fa-check fs-19 text-success"></i>
                    </button>

                    <button className="complete" onClick={this.handleClickOpen} >
                        <i className="fa fa-bell fs-19 text-primary"></i>
                    </button>
                </div>
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem