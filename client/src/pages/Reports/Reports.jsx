import React from 'react';
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import Header from '../../components/Header/Header';
import TimerFooter from '../../components/TimerFooter/TimerFooter';
import './Reports.scss';

const Reports = ({
    toggleDrawer,
    isDrawerOpen,
    timer,
    startTimer,
    stopTimer,
    setPomodoro,
    setTaskName,
    openDialog
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
                openDialog={openDialog}
            />
        </>
    )
}

export default Reports;