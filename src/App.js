import React, { Component } from 'react';
import './App.css';
import PrayerCards from './components/PrayerCards';
import BottomAppBar from './components/BottomAppBar';


class App extends Component {
  render() {
    return (
      <div>
          <BottomAppBar />
          <PrayerCards prayerName='Fajr' prayerTime='6:00 AM' />
          <PrayerCards prayerName='Duhr' prayerTime='11:30 PM'  />
          <PrayerCards prayerName='Asr' prayerTime='3:00 PM'  />
          <PrayerCards prayerName='Magrib' prayerTime='4:51 PM'  />
          <PrayerCards prayerName='Isha' prayerTime='6:15 AM'  />
      </div>
    );
  }
}

export default App;
