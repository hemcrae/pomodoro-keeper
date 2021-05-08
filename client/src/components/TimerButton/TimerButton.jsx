import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import './TimerButton.scss';
import { IconButton } from '@material-ui/core';

class TimerButton extends React.Component {

    state = {
        isTimerOn: false
    }

    startTimer() {
        this.setState({
            isTimerOn: true
        })
    }

    stopTimer() {
        this.setState({
            isTimerOn: false
        })
    }

    handleTimerChange = (event) => {
        if (this.state.isTimerOn) {
            this.stopTimer()
        } else {
            this.startTimer()
        }
    }

    render () {
        let buttonDynamicClass = 'timer__button--stop';
        if (!this.state.isTimerOn) {
            buttonDynamicClass = 'timer__button--start'
        } 

        return (
            <>
                <div className="timer">
                    <IconButton 
                    className={`timer__button ${buttonDynamicClass}`}
                    onClick={this.handleTimerChange}
                    >
                        {this.state.isTimerOn ? 
                            <PauseCircleFilledIcon fontSize='large'/> 
                            : 
                            <PlayCircleFilledIcon fontSize='large'/>}
                    </IconButton>
                </div>
            </>
        )
    }
}


export default TimerButton;
