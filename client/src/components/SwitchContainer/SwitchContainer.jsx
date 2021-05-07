import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class SwitchContainer extends React.Component { 
    
    state = {
        pomodoroTimer: true,
        regularTimer: true
    }

    handleSwitchChange = (event) => {
        this.setState({
            checked: event.target.checked
        })
    }

    render () {
        return (
            <FormControlLabel
                control={
                    <Switch
                        checked={this.state.checked}
                        onChange={this.handleSwitchChange}
                        value="checked"
                    />
                }
                labelPlacement="start"
                label={this.state.checked ? "Pomodoro" : "Standard"}
            />
        )
    }
}

export default SwitchContainer;