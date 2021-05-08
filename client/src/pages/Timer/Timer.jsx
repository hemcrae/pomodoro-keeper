import React from 'react';
import './Timer.scss';
import Header from '../../components/Header/Header'
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import Footer from '../../components/Footer/Footer';

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
            <Footer 
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

