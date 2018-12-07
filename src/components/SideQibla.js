import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe';



const styles=({
   calenderContainer: {
       float: 'right',
       paddingRight: 20,
       paddingBottom: 20,
   },
   buttonStyle: {
       marginTop: 20,
       marginLeft: 100

},


});

export default class SideCalendar extends Component {


    state = {
        date: new Date(),
    };

    onChange = date => this.setState({ date });

    render() {
        return (
            <div>
                <div style={styles.calenderContainer}>

                    <Iframe url="https://qiblafinder.withgoogle.com/intl/en/desktop"
                    width="350px"
                    height="750px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen />



                </div>

 


            </div>
        );
    }
}

