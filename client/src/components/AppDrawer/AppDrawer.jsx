import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TimerIcon from '@material-ui/icons/Timer'
import LockIcon from '@material-ui/icons/Lock'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import './AppDrawer.scss'

export const AppDrawer = ({isOpen, toggleDrawer}) => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const handleDrawerClose = () => {
        toggleDrawer();
    }

    return (
        <Drawer 
            className="drawer"
            anchor="left"
            open={isOpen}
            onClose={handleDrawerClose}
        >
            <Button onClick={handleDrawerClose}>
                <ChevronLeftIcon /> 
            </Button>
            <List onClick={handleDrawerClose}>
                {!isAuthenticated && (
                    <ListItem className="drawer__list-item">
                        <button className="drawer__link" onClick={() => loginWithRedirect()}>
                            <AccountCircleIcon className="drawer__list-item-icon" />
                            Login
                        </button>
                    </ListItem>
                )}
                {isAuthenticated && (
                    <>
                        <ListItem className="drawer__list-item">
                            <button className="drawer__link" onClick={() => logout()}>
                                <LockIcon className="drawer__list-item-icon" />
                                Logout
                            </button>
                        </ListItem>
                        <ListItem className="drawer__list-item">
                            <Link className="drawer__link" to="/timer">
                                <TimerIcon className="drawer__list-item-icon" />
                                Timer
                            </Link>
                        </ListItem>
                        <ListItem className="drawer__list-item">
                            <Link className="drawer__link" to="/reports">
                                <ListAltIcon className="drawer__list-item-icon" />
                                Reports
                            </Link>
                        </ListItem>
                    </>
                )}
            </List>
        </Drawer>
    )
}