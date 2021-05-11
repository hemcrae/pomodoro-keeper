import React from 'react';
import './TimeCard.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';



const timeFormat = [
    { hour: 'numeric', hour12: false, }, ':', { minute: 'numeric' }, ':', {second: 'numeric'}
]

const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours}:${getMinutes}:${getSeconds}`
}

function formatDate (t, a) {
    return a.map((m) => {
        if (typeof m === 'string') {
            return m;
        }
        let f = new Intl.DateTimeFormat('en', m);
        return f.format(t);
    }).join('');
}

const TimeCard = ({entries}) => {

    const formattedEntries = entries.reduce((acc, entry) => {
        const startTimeDate = new Date(entry.startTime)
        const endTimeDate = new Date(entry.endTime)
        const startTimeUnix = startTimeDate.getTime()
        const endTimeUnix = endTimeDate.getTime()
        const diff = Math.floor((endTimeUnix - startTimeUnix) / 1000);

        if (!acc.day) {
            acc.day = formatDate(startTimeDate, [{ dateStyle: 'full' }])
        }

        acc.total = acc.total + diff
        acc.entries = [
            ...acc.entries,
            {
                id: entry._id,
                name: entry.name,
                formattedStartTime: formatDate(startTimeDate, timeFormat),
                formattedEndTime: formatDate(endTimeDate, timeFormat),
                formattedTotal: formatTime(diff)
            }
        ]
        return acc
    }, {total: 0, entries: []})

    return (
        <>
        <Card className="card">
            <CardActionArea>
                <CardContent>
                    <div className="time-card">
                        <header className="time-card__wrap-top">
                            <h2 className="time-card__header">
                                {formattedEntries.day}
                            </h2>
                            <h2 className="time-card__total-time">
                                {formatTime(formattedEntries.total)}
                            </h2>
                        </header>
                        {formattedEntries.entries && formattedEntries.entries.map((entry) => (
                            <div key={entry.id} className="time-card__entry">
                                <h2 className="time-card__taskName">
                                    {entry.name}
                                </h2>
                                <h3 className="time-card__hours">
                                {entry.formattedStartTime} - {entry.formattedEndTime}
                                </h3>
                                <h3 className="time-card__timer">
                                    {entry.formattedTotal}
                                </h3>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    ) 
}

export default TimeCard;