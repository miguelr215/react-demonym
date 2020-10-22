import React, { Component } from 'react';
import './App.css';
import DemonymApp from './demonymApp.js';
import CountrySelector from './countrySelector.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        <DemonymApp />
      </div>
    );
  }
}

export default App;
