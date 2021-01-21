import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Container } from '@material-ui/core';
import CreateModal from './CreateModal';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar({createFunction}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <AssignmentTurnedInIcon />
                        </IconButton>
                        <Typography  variant="h6" className={classes.title}>Task List App</Typography>
                        <CreateModal createFunction={createFunction} />
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
