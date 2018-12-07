import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SettingIcon from '@material-ui/icons/Settings';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Input from '@material-ui/core/Input';

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
        width: 250,
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
    fullList: {
        width: 'auto',
    },

});




class BottomBar extends React.Component {

    state = {
        bottom: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render(){
        const { classes } = this.props;

        const fullList = (
            <div className={classes.fullList}>
                <Input/>
                <List>
                    <Input/>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );




        return (
            <React.Fragment>
                <CssBaseline />

                <AppBar position="fixed" className={classes.appBar} elevation={10} >
                    <Drawer
                        anchor="bottom"
                        open={this.state.bottom}
                        onClose={this.toggleDrawer('bottom', false)}
                    >
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('bottom', false)}
                            onKeyDown={this.toggleDrawer('bottom', false)}
                        >
                            {fullList}
                        </div>
                    </Drawer>
                    <Toolbar className={classes.toolbar}>
                        <IconButton color="inherit" aria-label="Open drawer">
                            Hadith
                        </IconButton>
                        <div>
                            <IconButton color="inherit">
                                <MoneyIcon />
                            </IconButton>
                            <IconButton color="inherit" onClick={this.toggleDrawer('bottom', true)}>
                                <SettingIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }

}

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);
