import React from 'react';
import './TimeCard.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { formatDate, formatTime } from '../../utils/time.utils';

interface MongoEntry { 
    _id: string
    name: string
    startTime: string
    endTime: string
}

interface FormattedEntry {
    id: string
    name: string
    formattedStartTime: string
    formattedEndTime: string
    formattedTotal: string
}

interface EntriesProps { 
    entries: MongoEntry[]
}

interface FormattedEntriesObject {
    total: number
    entries: FormattedEntry[]
    day?: string
} 

const timeFormat = [
    { hour: 'numeric', hour12: false, }, ':', { minute: 'numeric' }, ':', {second: 'numeric'}
]

export const TimeCard: React.FC<EntriesProps> = ({
    entries
}) => {

    const formattedEntries = entries.reduce((acc: FormattedEntriesObject, entry) => {
        const startTimeDate = new Date(entry.startTime)
        const endTimeDate = new Date(entry.endTime)
        const startTimeUnix = startTimeDate.getTime()
        const endTimeUnix = endTimeDate.getTime()
        const diff = Math.floor((endTimeUnix - startTimeUnix) / 1000);
        console.log(diff)

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
                                {formattedEntries.day || ''}
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