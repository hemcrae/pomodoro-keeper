import React from 'react';
import Header from '../../components/Header/Header';
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import PageFooter from '../../components/PageFooter/PageFooter';
import './Home.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Home = ({
    toggleDrawer, 
    isDrawerOpen
    }) => {

    return (
        <>
            <Header toggleDrawer={toggleDrawer}/>
            <AppDrawer
                isOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer} 
                />
            <section className="home">
                <div className="home__cards">
                    <Card className="home__card">
                        <CardContent className="home__card-content">
                            <h1 className="home__card-heading">
                                What is Pomodoro Keeper?
                            </h1>
                            <p className="home__card-text">
                                An application that utilizes the Pomodoro Technique
                                to help with the management of tasks whether personal or work.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <PageFooter />
        </>
    )
}

export default Home;