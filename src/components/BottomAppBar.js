import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import SettingIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: '#373741',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#373741',
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },

});


function BottomAppBar(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} elevation={5}>
                <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit" aria-label="Open drawer">
                        <SettingIcon />
                    </IconButton>
                    <div>
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

BottomAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
