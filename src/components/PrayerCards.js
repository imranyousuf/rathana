import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import mp3_file from './azan.mp3';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: 360,
        minWidth: 360,
        marginTop: 20,
        marginLeft: 15,
        backgroundColor: 'white',
        color: '#373741',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: '600',
        fontSize: 24,


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

     constructor(props) {
         super(props);
         this.handleLoginClick = this.handleTurnOn.bind(this);

         this.state = {
             FajrSound: true,
             DuhrSound: false,
             AsrSound: true,
             MagribSound: false,
             IshaSound: true,
             theme: 'dark',
             play: false,
             pause: true,

         };
         this.url = mp3_file;
        this.audio = new Audio(this.url);
     }


    play = () => {

        this.setState({ play: true, pause: false })
          this.audio.play();
        }
        
    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }




     handleTurnOn = () => {

         let getStateName = this.props.prayerName + "Sound";
         if(this.state[getStateName]){
             this.setState({[getStateName]: false});
         }
         if(!this.state[getStateName]){
             this.setState({[getStateName]: true});
         }

         };



    render(){
        const { classes, theme } = this.props;
        let volume;
        let getStateName = this.props.prayerName + "Sound";

        if(this.state[getStateName]){
            volume = <VolumeUpIcon />;
   

        }if(!this.state[getStateName]){

            volume = <VolumeOffIcon/>;
        }

        


      return (
        <Paper className={classes.root} elevation={5}>

            <div className={classes.prayerName}>
                {this.props.prayerName}
            </div>


            <div className={classes.prayerTime}>
                 {this.props.prayerTime}
                <IconButton
                    onClick={() => this.handleTurnOn()}
                    style={{color: '#373741'}}
                >
                    {volume}
                </IconButton>
            </div>

            <button onClick={this.play}>Play</button>
            <button onClick={this.pause}>Pause</button>



        </Paper>

    );
    }
  }




export default withStyles(styles)(PrayerCards);
