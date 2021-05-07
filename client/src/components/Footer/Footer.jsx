import React from 'react';
import SwitchContainer from '../SwitchContainer/SwitchContainer';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import InfoIcon from '@material-ui/icons/Info';
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
                        <InfoIcon fontSize='medium'/>
                    </IconButton>
                </div>
            </div>
            <div className="footer__wrap-right">
                <IconButton>
                    <PlayCircleFilledIcon fontSize='large'/>
                </IconButton>
            </div>
        </footer>
    
    )

}

export default Footer;