import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TimerIcon from '@material-ui/icons/Timer';

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
            <List>
                {['Timer', 'Tasks', 'Reports'].map((text) => (
                <ListItem button key={text}>
                    <ListItemText key={text} />
                </ListItem>
                ))}
            </List>
            
            
            {/* <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon /> 
                <ChevronRightIcon />
            </IconButton> */}
        </Drawer>
    )
}

export default AppDrawer;