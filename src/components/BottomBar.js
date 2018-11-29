import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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


function BottomBar(props) {
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

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);
