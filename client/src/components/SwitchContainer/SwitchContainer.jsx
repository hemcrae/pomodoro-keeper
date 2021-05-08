import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SwitchContainer = ({setPomodoro, timer}) => {

    const handleSwitchChange = (event) => {
        setPomodoro(event.target.checked)
    }
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={timer.pomodoro}
                    onChange={(event) => handleSwitchChange(event)}
                />
            }
            labelPlacement="start"
            label={timer.pomodoro ? "Pomodoro" : "Standard"}
        />
    )
}

export default SwitchContainer;