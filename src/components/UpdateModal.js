import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateModal({ updateFunction  , el }) {
    const [open, setOpen] = React.useState(false);
    const [task, setTask] = useState('')
    const [gilad, setGilad] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(()=>{
        setTask(el.task)
        setGilad(el.completed)
    },[])
    
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = () => {
        setGilad(!gilad)
    }
    const callUpdate = () => {
        handleClose()
        updateFunction({ task: task, completed: gilad,id:el.id})
        setTask('')
        setGilad(false)

    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Update </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Create  New Task</DialogTitle>
                <DialogContent>
                    <Typography className="mb-4">Allow the user to toggle a task's completion property by clicking the checkbox next to it.</Typography>
                    <TextField value={task}  onChange={e => setTask(e.target.value)} required id="standard-required" label="Required" placeholder="Enter  Text" />
                    <FormGroup>
                        <FormControlLabel
                            label="Get Python black  belt"
                            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                        />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">Cancel</Button>
                    <Button onClick={callUpdate} variant="contained" color="secondary" >Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
