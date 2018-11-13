import React, { Component } from 'react';
import './App.css';
import PrayerCards from './components/PrayerCards/PrayerCards';


class App extends Component {
  render() {
    return (
      <div>
        <PrayerCards 
        prayerName='Fajr'
        prayerTime='6:00 AM'
        />
      </div>
    );
  }
}

export default App;
