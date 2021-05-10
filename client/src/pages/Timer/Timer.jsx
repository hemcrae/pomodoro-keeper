import React from 'react';
import './Timer.scss';
import Header from '../../components/Header/Header'
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import TimerFooter from '../../components/TimerFooter/TimerFooter';
import TimeCard from '../../components/TimeCard/TimeCard';

function formatDate (t, a) {
    return a.map((m) => {
        if (typeof m === 'string') {
            return m;
        }
        let f = new Intl.DateTimeFormat('en', m);
        return f.format(t);
    }).join('');
 }

const Timer = ({
    timeEntries,
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
            {timeEntries && timeEntries.map(entry => {
                const format = [
                    { day: 'numeric' }, '-', { month: 'numeric' }, '-', { year: 'numeric' }, 
                    ' ',
                    { hour: 'numeric', hour12: false, }, ':', { minute: 'numeric' }, ':', {second: 'numeric'}
                ]
                const startTimeFormatted = formatDate(new Date(entry.startTime), format)
                const endTimeFormatted = formatDate(new Date(entry.endTime), format)
                return (
                <div>
                    {entry.name} <br />
                    {startTimeFormatted} - {endTimeFormatted}
                </div>
                )
            })}
            <TimeCard />
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

