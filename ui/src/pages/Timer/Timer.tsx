import React from 'react';
import './Timer.scss';
import { TimerFooter } from '../../components/TimerFooter/TimerFooter';
import { TimeCard } from '../../components/TimeCard/TimeCard';
import { formatDate } from '../../utils/time.utils';
import { AppDrawer } from '../../components/AppDrawer/AppDrawer';
import { Header } from '../../components/Header/Header';

interface TimerProps {
    timeEntries: []
    toggleDrawer: () => void
    isDrawerOpen: boolean
    timer: () => void
    startTimer: () => void
    stopTimer: () => void
    setPomodoro: (active: boolean) => void
    setTaskName: (taskName: string) => void
    openDialog: () => void
}

export const Timer: React.FC<TimerProps> = ({
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

