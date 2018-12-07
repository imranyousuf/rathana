import React, { Component } from 'react';
import PrayerCards from './components/PrayerCards';
import BottomBar from './components/BottomBar';
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
          <BottomBar />
          <SideQibla />
          
          <PrayerCards prayerName='Fajr' prayerTime='6:00 AM' />
          <PrayerCards prayerName='Duhr' prayerTime='11:30 PM'  />
          <PrayerCards prayerName='Asr' prayerTime='3:00 PM'  />
          <PrayerCards prayerName='Magrib' prayerTime='4:51 PM'  />
          <PrayerCards prayerName='Isha' prayerTime='6:15 AM'  />

          <IslamCalender />
      </div>
    );
  }
}

export default App;
