import React from 'react';
import SwitchContainer from '../SwitchContainer/SwitchContainer';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import TimerButton from '../TimerButton/TimerButton'
import './TimerFooter.scss';

const TimerFooter = ({timer, setTaskName, setPomodoro,...timerProps}) => {
    return (
        <footer className="TimerFooter">
            <div className="TimerFooter__wrap-left">
                <input 
                    className="TimerFooter__input" 
                    value={timer.setTaskName} 
                    placeholder="Task Name" 
                    onChange={(event) => setTaskName(event.target.value)}/>
                <div className="TimerFooter__wrap-switch">
                    <IconButton>
                        <SwitchContainer 
                            timer={timer}
                            setPomodoro={setPomodoro}/>
                        <InfoIcon />
                    </IconButton>
                </div>
            </div>
            <div className="TimerFooter__wrap-right">
                <TimerButton timer={timer} {...timerProps}/>
            </div>
        </footer>
    
    )

}

export default TimerFooter;