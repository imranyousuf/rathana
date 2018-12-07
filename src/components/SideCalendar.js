import React, { Component } from 'react';
import Calendar from 'react-calendar';



const styles=({
   calenderContainer: {
       float: 'right',
       paddingRight: 20,
       paddingBottom: 20,


   }

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
                    <Calendar
                        calendarType="Arabic"
                        locale="us"
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>


            </div>
        );
    }
}

