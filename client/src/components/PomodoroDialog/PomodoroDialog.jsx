import React from 'react';
import './PomodoroDialog.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { Button, DialogContent } from '@material-ui/core';


export const PomodoroDialog = ({open, onClose}) => {
    return (
        <Dialog 
            open={open}
            onClose={() => onClose(false)}
        >
            <DialogContent>
                <h2 className="dialog__header">
                    Time to take a break!
                </h2>
                <p className="dialog__text">
                    Dismiss and keep working or take a 5 minute break.
                </p>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose(false)}>
                    Dismiss
                </Button>
                <Button onClick={() => onClose(true)}>
                    Break
                </Button>         
            </DialogActions>
        </Dialog>
    )
}