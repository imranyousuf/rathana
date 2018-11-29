import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeDown';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: 360,
        marginTop: 20,
        marginLeft: 15,
        backgroundColor: 'white',
        color: '#373741',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: '600',
        fontSize: 24

    },

    prayerName: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        float: 'left'

    },
    prayerTime: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        float: 'right'

    }
});


 class PrayerCards extends React.Component {

     _turnOn = () => {

     };

    render(){
        const { classes, theme } = this.props;
      return (
        <Paper className={classes.root} elevation={5}>

            <div className={classes.prayerName}>
                {this.props.prayerName}
            </div>

            <div className={classes.prayerTime}>
                 {this.props.prayerTime}
                <IconButton
                    onClick={() => console.log("Test")}
                    style={{color: '#373741'}}
                >
                    <VolumeUpIcon />
                </IconButton>
            </div>


        </Paper>

    );
    }
  }




export default withStyles(styles)(PrayerCards);
