import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import './TimerButton.scss';
import { IconButton } from '@material-ui/core';

export const TimerButton = ({timer, startTimer, stopTimer}) => {
    const isTimerOn = timer.startTime !== null

    const handleTimerChange = (event) => {
        if (isTimerOn) {
            stopTimer()
        } else {
            startTimer()
        }
    }

    let buttonDynamicClass = 'timer__button--stop';
    if (!isTimerOn) {
        buttonDynamicClass = 'timer__button--start'
    } 

    return (
        <>
            <div className="timer">
                <IconButton 
                    className={`timer__button ${buttonDynamicClass}`}
                    onClick={() => handleTimerChange()}
                >
                    {isTimerOn ? 
                        <PauseCircleFilledIcon fontSize='large'/> 
                        : 
                        <PlayCircleFilledIcon fontSize='large'/>}
                </IconButton>
            </div>
        </>
    )  
}