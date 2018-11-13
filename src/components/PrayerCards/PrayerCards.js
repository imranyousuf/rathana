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
      marginTop: '50px',
      marginLeft: '100px',
      marginRight: '100px',
      marginBottom: '50px',
      backgroundColor: 'white',
      width: '50%'
    },
    prayerTimes: {
      float: 'right',
      marginTop: '-11px',
      marginRight: '0px'
    }
  });
  
  class PrayerCards extends React.Component {
  

    render(){
      return (
        <div>
        <Paper className={this.classes.root} elevation={2}>

            {this.props.prayerName}
            <div className={classes.prayerTimes}>
            {this.props.prayerTime}
            <IconButton onClick={() => console.log("Test")}>
              
              <AlarmOffIcon />
            </IconButton>
            </div> 

        </Paper>
      </div>
    );
      
    PrayerCards.propTypes = {
      classes: PropTypes.object.isRequired,
    };

    }
  
  }

  
  export default withStyles(styles,)(PrayerCards);