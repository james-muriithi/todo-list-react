import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class TodoItem extends Component {

    state = {
        open: false
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {id , title, end} = this.props.todo
        return (
            <li> {title} {end}
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
                <div>
                    <Dialog 
                        fullWidth={true}
                        maxWidth={'xs'}
                    style={{ top: "0px!important", bottom: "0px!important"}}
                    open={this.state.open} 
                    onClose={this.handleClose} 
                    aria-labelledby="form-dialog-title">
                        <DialogTitle>
                            Schedule a Reminder
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Select the date and time
                            </DialogContentText>
                            <form noValidate>
                                <TextField
                                    id="datetime-local"
                                    label="Reminder"
                                    type="datetime-local"
                                    margin="dense"
                                    name="time"
                                    fullWidth
                                    
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                        </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Set Reminder
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem