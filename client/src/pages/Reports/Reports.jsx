import React from 'react';
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import Header from '../../components/Header/Header';
import TimerFooter from '../../components/TimerFooter/TimerFooter';
import './Reports.scss';
import { Bar } from 'react-chartjs-2';
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

const Reports = ({
    toggleDrawer,
    isDrawerOpen,
    timer,
    startTimer,
    stopTimer,
    setPomodoro,
    setTaskName,
    openDialog,
    timeEntries
}) => {
    const totalObject = timeEntries.reduce((acc, entry) => {
        const startTimeDate = new Date(entry.startTime)
        const endTimeDate = new Date(entry.endTime)
        const startTimeUnix = startTimeDate.getTime()
        const endTimeUnix = endTimeDate.getTime()
        const diff = Math.floor((endTimeUnix - startTimeUnix) / 1000);
        const stringDate = formatDate(startTimeDate, [{ day: 'numeric' }, '-', { month: 'numeric' }, '-', { year: 'numeric' }])
        acc[stringDate] = acc[stringDate] || 0
        acc[stringDate] = acc[stringDate] + diff
        return acc
    }, {})

    const groupedTimeEntries = timeEntries.reduce((acc, entry) => {
        const startTimeDate = new Date(entry.startTime)
        const stringDate = formatDate(startTimeDate, [{ day: 'numeric' }, '-', { month: 'numeric' }, '-', { year: 'numeric' }])
        acc[stringDate] = acc[stringDate] || []
        acc[stringDate] = [...acc[stringDate], entry]
        return acc
    }, {})

    const data = {
        labels: Object.keys(totalObject),
        datasets: [
            {
                label: 'Hours',
                data: Object.values(totalObject).map(sec => sec / 60 / 60),
                borderWidth: 1,
            },
        ],
    };
    
    return (
        <>
            <Header toggleDrawer={toggleDrawer}/>
            <AppDrawer 
                isOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
            />
            <div>
                <Bar height={100} data={data} options={{
                    scales: {
                        yAxes: [{
                            type: 'time',
                            time: {
                                unit: 'second',
                                displayFormats: {
                                    hour: 'HH:mm:ss'
                                }
                            }
                        }],
                    },
                }} />
            </div>
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

export default Reports;