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
    settingsButon: {
        float: 'right'
    }

});

const sideList = (
    <div styles={styles.list}>
      <List>
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




class BottomBar extends React.Component {

    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    

    render(){
        const { classes } = this.props;




        return (
            <React.Fragment>
                <CssBaseline />
                <div>

        <Button onClick={this.toggleDrawer('left', true)} >
        <IconButton>
        <SettingIcon />
        </IconButton>
        </Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        </div>


            </React.Fragment>
        );
    }

}

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);
