import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './PrayerCards.css';
import IconButton from '@material-ui/core/IconButton';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: 360,
        marginTop: 50,
        marginLeft: 15,
        backgroundColor: '#81c784'

    },
});


 class PrayerCards extends React.Component {


    render(){
        const { classes, theme } = this.props;
      return (
        <Paper className={classes.root} elevation={10}>

            {this.props.prayerName}
            <div>
            {this.props.prayerTime}
            <IconButton onClick={() => console.log("Test")}>

              <AlarmOffIcon />
            </IconButton>
            </div>

        </Paper>

    );
    }
  }




export default withStyles(styles)(PrayerCards);
