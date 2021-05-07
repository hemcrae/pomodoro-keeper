import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TimerIcon from '@material-ui/icons/Timer'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ListAltIcon from '@material-ui/icons/ListAlt';


const AppDrawer = ({isOpen, toggleDrawer}) => { 

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
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon /> 
                {/* <ChevronRightIcon /> */}
            </IconButton>
            <List>
                <ListItem>
                    <IconButton>
                        <TimerIcon />
                    </IconButton>
                    <ListItemText>
                        Timer
                    </ListItemText>
                </ListItem>
            </List>

            <List>
                <ListItem>
                    <IconButton>
                        <FormatListBulletedIcon />
                    </IconButton>
                    <ListItemText>
                        Tasks
                    </ListItemText>
                </ListItem>
            </List>

            <List>
                <ListItem>
                    <IconButton>
                        <ListAltIcon />

                    </IconButton>
                    <ListItemText>
                        Reports
                    </ListItemText>
                </ListItem>
            </List>
            
            
        </Drawer>
    )
}

export default AppDrawer;