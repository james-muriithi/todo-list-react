import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import moment from 'moment';

export default class MyDialog extends Component {

    state = {
        dateTime : moment().add(10, 'minute').format('YYYY-MM-DDTHH:mm')
    }

    onChange = (e) => {
        this.setState({dateTime: e.taget.value})
    }

    render() {
        const {open, handleClose, setReminder} = this.props
        return (
            <div>
                <Dialog
                    fullWidth={true}
                    maxWidth={'xs'}
                    style={{ top: "0px!important", bottom: "0px!important" }}
                    open={open}
                    onClose={handleClose}
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
                                defaultValue={this.state.dateTime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.onChange}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={setReminder.bind(this, this.state.dateTime)} color="primary">
                            Set Reminder
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
