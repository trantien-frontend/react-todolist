import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import Login from 'Features/Auth/components/Login';
import Register from 'Features/Auth/components/Register';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logout } from 'Features/Auth/userSlice';


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
    link: {
        color: '#fff',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(2),
        color: theme.palette.grey,
    }
}));
const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
}
export default function Header() {
    const dispatch = useDispatch();

    const loggedInUser = useSelector(state => state.user.current);

    const isloggedIn = !!loggedInUser.id;
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleMenuClose = () => {
        setAnchorEl(null);
    }
    const handleLogout = () => {
        const actionCallled = logout();
        dispatch(actionCallled)
    }
    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <CodeIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/">TTSHOPS</Link>
                    </Typography>

                    <NavLink className={classes.link} to="/todos">
                        <Button color="inherit">Todos</Button>
                    </NavLink>

                    <NavLink className={classes.link} to="/albums">
                        <Button color="inherit">Album</Button>
                    </NavLink>

                    {!isloggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                    )}

                    {isloggedIn && (
                        <IconButton color="inherit" onClick={handleMenuClick}>
                            <AccountCircle />
                        </IconButton>
                    )}


                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
            <Dialog disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>

                    <IconButton className={classes.closeButton} onClick={handleClose}>
                        <Close />
                    </IconButton>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box textAlign="center">
                                <Button color='primary' onClick={() => { setMode(MODE.LOGIN) }}>
                                    LOGIN HERE
                                </Button>
                            </Box>
                        </>
                    )}

                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color='primary' onClick={() => { setMode(MODE.REGISTER) }}>
                                    REGISTER HERE
                                </Button>
                            </Box>
                        </>
                    )}

                </DialogContent>
            </Dialog>

        </div>
    );
}
