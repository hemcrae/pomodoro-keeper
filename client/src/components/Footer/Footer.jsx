import React from 'react';
import SwitchContainer from '../SwitchContainer/SwitchContainer';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import TimerButton from '../TimerButton/TimerButton'
import './Footer.scss';

const Footer = ({timer, setTaskName, setPomodoro,...timerProps}) => {
    return (
        <footer className="footer">
            <div className="footer__wrap-left">
                <input 
                    className="footer__input" 
                    value={timer.taskName} 
                    placeholder="Task Name" 
                    onChange={(event) => setTaskName(event.target.value)}/>
                <div className="footer__wrap-switch">
                    <IconButton>
                        <SwitchContainer 
                            timer={timer}
                            setPomodoro={setPomodoro}/>
                        <InfoIcon />
                    </IconButton>
                </div>
            </div>
            <div className="footer__wrap-right">
                <TimerButton timer={timer} {...timerProps}/>
            </div>
        </footer>
    
    )

}

export default Footer;