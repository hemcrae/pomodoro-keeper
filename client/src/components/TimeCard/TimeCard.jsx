import React from 'react';
import './TimeCard.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const TimeCard = () => {

    return (
        <>
        <Card>
            <CardContent>
                <header className="timeCard__wrap-top">
                    <h2 className="timeCard__header">
                        Date
                    </h2>
                    <h2 className="timeCard__total-time">
                        3:00
                    </h2>
                </header>
                <div className="timeCard__wrap-bottom">
                    <h2 className="timeCard__taskName">
                        Task Name
                    </h2>
                    <h3 className="timeCard__hours">
                        11:00 - 11:30
                    </h3>
                    <h3 className="timeCard__timer">
                        0:30:00
                    </h3>
                </div>
            </CardContent>
        </Card>
        </>
    ) 
}

export default TimeCard;