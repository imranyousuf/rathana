import React, { Component } from 'react';
import PrayerCards from './components/PrayerCards';
import SideBar from './components/SideBar';
import SideQibla from "./components/SideQibla";
import IslamCalender from "./components/IslamCalender"


const styles=({
    appContainer: {
        maxWidth: 800,
    },
    

});

class App extends Component {
  render() {
    return (
      <div style={styles.appContainer}>

          <SideQibla />
         
          
          <PrayerCards prayerName='Fajr' prayerTime='6:00 AM' />
          <PrayerCards prayerName='Duhr' prayerTime='11:30 PM'  />
          <PrayerCards prayerName='Asr' prayerTime='3:00 PM'  />
          <PrayerCards prayerName='Magrib' prayerTime='4:51 PM'  />
          <PrayerCards prayerName='Isha' prayerTime='6:15 AM'  />
          

          <IslamCalender />
          <SideBar />
      </div>
    );
  }
}

export default App;
