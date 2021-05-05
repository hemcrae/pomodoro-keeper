import { ReactComponent as Logo } from '../../assets/Logo/Logo.svg';
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
            <AppBar className="header" position="fixed" color="transparent">
                <Toolbar className="header__toolbar">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                </Toolbar>
            </AppBar>
        </> 
    )
}

export default Header;