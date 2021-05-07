import React from 'react';
import SwitchContainer from '../SwitchContainer/SwitchContainer';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import TimerButton from '../TimerButton/TimerButton'
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap-left">
                <h2 className="footer__title">
                    Task Name
                </h2>
                <div className="footer__wrap-switch">
                    <IconButton>
                        <SwitchContainer />
                        <InfoIcon />
                    </IconButton>
                </div>
            </div>
            <div className="footer__wrap-right">
                <IconButton>
                    <TimerButton />
                </IconButton>
            </div>
        </footer>
    
    )

}

export default Footer;