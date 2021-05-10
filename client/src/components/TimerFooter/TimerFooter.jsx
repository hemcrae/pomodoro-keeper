import React, { useEffect, useState } from 'react';
import SwitchContainer from '../SwitchContainer/SwitchContainer';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import TimerButton from '../TimerButton/TimerButton'
import './TimerFooter.scss';

const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours}:${getMinutes}:${getSeconds}`
}

const TimerFooter = ({timer, setTaskName, setPomodoro,...timerProps}) => {

    const [stopwatch, setStopwatch] = useState('0:00:00');

    useEffect (() => {

        if (!timer.startTime) {
            setStopwatch('0:00:00')
            return
        }

        const interval = setInterval(() => {
            const unixNow = Date.now()
            const unixStartTime = new Date(timer.startTime).getTime()
            const diff = Math.floor((unixNow - unixStartTime) / 1000)
            setStopwatch(formatTime(diff))
        }, 1000) 
        return () => {
            clearInterval(interval)
        }
    }, [timer.startTime])

    return (
        <footer className="TimerFooter">
            <div className="TimerFooter__wrap-left">
                <input 
                    className="TimerFooter__input" 
                    value={timer.taskName} 
                    placeholder="Task Name" 
                    onChange={(event) => setTaskName(event.target.value)}/>
                <div className="TimerFooter__wrap-switch">
                    <Button>
                        <SwitchContainer 
                            timer={timer}
                            setPomodoro={setPomodoro}/>
                        <InfoIcon />
                    </Button>
                </div>
            </div>
            <div className="TimerFooter__wrap-right">
                <h2 className="TimerFooter__counter">
                    {stopwatch}
                </h2>
                <TimerButton timer={timer} {...timerProps}/>
            </div>
        </footer>
    
    )

}

export default TimerFooter;