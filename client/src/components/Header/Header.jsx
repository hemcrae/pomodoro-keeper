import { ReactComponent as LogoImg } from '../../assets/Logo/LogoImg.svg';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.scss';

const Header = ({toggleDrawer}) => {

    const handleDrawerOpen = () => {
        toggleDrawer();
    }

    return (
        <>
            <AppBar className="header" position="sticky" color="white">
                <Toolbar className="header__toolbar">
                    <LogoImg />
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </> 
    )
}

export default Header;