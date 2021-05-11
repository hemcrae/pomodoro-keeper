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
    setTaskName,
    openDialog
}) => {

    const groupedTimeEntries = timeEntries.reduce((acc, entry) => {
        const startTimeDate = new Date(entry.startTime)
        const stringDate = formatDate(startTimeDate, [{ day: 'numeric' }, '-', { month: 'numeric' }, '-', { year: 'numeric' }])
        acc[stringDate] = acc[stringDate] || []
        acc[stringDate] = [...acc[stringDate], entry]
        return acc
    }, {})

    return (
        <>
            <Header toggleDrawer={toggleDrawer}/>
            <AppDrawer 
                isOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
            />
            {groupedTimeEntries && Object.entries(groupedTimeEntries).map(([day, entries]) => (
                <TimeCard key={day} entries={entries} />
            ))}
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

export default Timer;

