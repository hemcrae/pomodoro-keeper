import React from 'react';
import './Home.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TimerIcon from '@material-ui/icons/Timer'
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle' 
import { useAuth0 } from "@auth0/auth0-react";
import { AppDrawer } from '../../components/AppDrawer/AppDrawer';
import { Header } from '../../components/Header/Header';


export const Home = ({
    toggleDrawer, 
    isDrawerOpen
    }) => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <>
            <Header toggleDrawer={toggleDrawer}/>
            <AppDrawer
                isOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer} 
                />
            <section className="home">
                <div className="home__hero">
                    <div className="home__intro">
                        <h1 className="home__intro-heading">
                            What is Pomodoro Keeper?
                        </h1>
                            <p className="home__intro-text">
                                An application that utilizes the Pomodoro Technique
                                to help with the management of tasks whether personal or work.
                            </p>
                    </div>
                    <div className="home__cards">
                        <Card className="home__card">
                            <CardContent className="home__card-content">
                                <h2 className="home__card-header">
                                    Use the pomodoro method to track your tasks
                                </h2>
                                <TimerIcon fontSize="large"/>
                            </CardContent>
                        </Card>   
                        <Card className="home__card">
                            <CardContent className="home__card-content">
                                <h2 className="home__card-header">
                                    Generate reports to understand your workflow
                                </h2>
                                <ListAltIcon fontSize="large"/>
                            </CardContent>
                        </Card>              
                    </div>
                    {!isAuthenticated && (
                        <div className="home__login">
                            <button className="home__link" onClick={() => loginWithRedirect()}>
                                <AccountCircleIcon className="home__item-icon" />
                                Login
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
