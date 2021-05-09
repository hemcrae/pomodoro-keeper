import React from 'react';
import './Timer.scss';
import Header from '../../components/Header/Header'
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import TimerFooter from '../../components/TimerFooter/TimerFooter';

const Timer = ({
    toggleDrawer, 
    isDrawerOpen, 
    timer, 
    startTimer, 
    stopTimer, 
    setPomodoro, 
    setTaskName
    }) => {

    return (
        <>
            <Header toggleDrawer={toggleDrawer}/>
            <AppDrawer 
                isOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
            />
            <TimerFooter 
                timer={timer}
                startTimer={startTimer}
                stopTimer={stopTimer}
                setPomodoro={setPomodoro}
                setTaskName={setTaskName}
            />
        </>
    )
}

export default Timer;

